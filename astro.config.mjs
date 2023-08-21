import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import fs from "fs/promises";
import astroExpressiveCode from 'astro-expressive-code'

// TODO(@maxu): Remove these once we have them migrated!
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {generateIndexPages} from './src/generate-indexes'

const headingIcon = (node) => {
  let e = new HTMLSpanElement();
  e.innerText = "🔗 asid";
  return [e];
};

/**
 * Small astro integration to scan all generated pages links &
 * match them with known routes to find (possibly) broken links.
 * @returns
 */
const brokenLinkChecker = () => {
    return {
        name: "broken-link-checker",
        hooks: {
            "astro:build:done": async ({ routes, pages }) => {
                pages = pages.map(
                    (e) => `/${e.pathname.endsWith("/") ? e.pathname.slice(0, -1) : e.pathname}`
                );

                console.log("Results for possibly broken links:");
                for (const route of routes) {
                    if (route.route.startsWith("/changelog") || route.route.startsWith("/manual") || route.route.startsWith("/migration")) continue;
                    const fPath = route.distURL.pathname;
                    const content = await fs.readFile(fPath, "utf-8");

                    const pageLinks = Array.from(
                      content.matchAll(/<a\s[^>]*\bhref="([^#"][^"]*)"/g),
                      (m) => m[1]
                    )
                      .filter((e) => !["/discovery", "/blog"].includes(e))
                      // https://deta.space/docs
                      .filter(
                        (l) =>
                          l.startsWith("https://deta.space/docs") ||
                          (!l.startsWith("https") &&
                            !l.startsWith("https") &&
                            !l.startsWith("mailto") &&
                            !l.startsWith("tel") &&
                            !l.startsWith("data"))
                      )
                      .map((l) => (l.startsWith("https://deta.space/docs") ? l.slice(18) : l))
                      .map((l) => (l.indexOf("#") > -1 ? l.slice(0, l.indexOf("#")) : l))
                      .map((l) => (l.endsWith("/") ? l.slice(0, -1) : l));

                    for (const pLink of pageLinks) {
                        if (!pages.includes(pLink)) {
                            console.log(`  - ${pLink} in ${fPath}`);
                        }
                    }
                }
            }
        }
    }
};

// https://astro.build/config
export default defineConfig({
  integrations: [astroExpressiveCode(), mdx(), svelte(), preact(), react(), brokenLinkChecker()],
  site: "https://deta.space/",
  base: "/",
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap", content: headingIcon }]
    ]
  },
  experimental: {
   viewTransitions: true
  },
  vite: {
    build: {
      rollupOptions: {
        external:
          process.env.PUBLIC_TELETYPE_INSTALLED === "true" ? [] : ["@deta/teletype/src/index"],
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split(".").at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) extType = "img";
            return `docs_assets/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: "docs_chunks/[name]-[hash].js",
          entryFileNames: "docs_assets/js/[name]-[hash].js"
        }
      }
    }
  }
});
