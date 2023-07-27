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

// https://astro.build/config
export default defineConfig({
  integrations: [astroExpressiveCode(), mdx(), svelte(), preact(), react()],
  site: "https://deta.space/",
  base: "/",
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap", content: headingIcon }]
    ]
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
