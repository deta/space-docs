import fs from "fs/promises";
import path from "path";

/**
 * Small astro integration to scan all generated pages links &
 * match them with known routes to find (possibly) broken links.
 * @returns
 */
export const brokenLinkIntegration = () => {
  return {
    name: "broken-link-checker",
    hooks: {
      "astro:build:done": async ({ pages }) => {
        pages = pages.map(
          (e) => `/${e.pathname.endsWith("/") ? e.pathname.slice(0, -1) : e.pathname}`
        );
        // https://deta.space/docs/en/build/fundamentals/app-lifecycle


        console.log("Results for possibly broken links:");

        const searchPath = "./dist/docs";

        let srcFiles = [];
        async function getFiles(dir = "./") {
          const entries = await fs.readdir(dir, { withFileTypes: true });

          const files = entries
            .filter((entry) => !entry.isDirectory())
            .map((file) => ({ ...file, dir: dir + file.name }));

          const folders = entries.filter((entry) => entry.isDirectory());
          for (const folder of folders)
            files.push(...(await getFiles(`${path.join(dir, folder.name)}`)));

          return files;
        }
        srcFiles = (await getFiles(searchPath)).map((e) => path.join(e.path, e.name));

        for (const srcFile of srcFiles) {
          const content = await fs.readFile(srcFile, "utf-8");

          const pageLinks = Array.from(
            content.matchAll(/<a\s[^>]*\bhref="([^#"][^"]*)"/g),
            (m) => m[1]
          )
            .filter((e) => !["/discovery", "/blog"].includes(e))
            .filter(
              (l) =>
                l.startsWith("https://deta.space/docs") ||
                (!l.startsWith("https") &&
                  !l.startsWith("http") &&
                  !l.startsWith("mailto") &&
                  !l.startsWith("tel") &&
                  !l.startsWith("data") &&
                  !l.startsWith("./"))
            )
            .map((l) => (l.startsWith("https://deta.space/docs") ? l.slice(18) : l))
            .map((l) => (l.indexOf("#") > -1 ? l.slice(0, l.indexOf("#")) : l))
            .map((l) => (l.endsWith("/") ? l.slice(0, -1) : l));

          for (const pLink of pageLinks) {
            if (!pages.includes(pLink)) {
              console.log(`  - ${pLink} in ${srcFile}`);
            }
          }
        }
      }
    }
  };
};
