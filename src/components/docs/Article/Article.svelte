<script lang="ts">
  import type { MarkdownHeading } from "astro";
  import ArticleHeader from "./ArticleHeader.svelte";
  import DesktopTableOfContents from "./TableOfContents/DesktopTableOfContents.svelte";
  import "./article.scss";
  import type { docsSchema } from "@/content/config";
  import type { z } from "astro/zod";
  import { onMount } from "svelte";

  export let frontmatter: z.infer<typeof docsSchema>,
    headings: MarkdownHeading[],
    currentPage: string;

  let hidden = true;
  onMount(() => {
    setTimeout(() => (hidden = false), 1);
  });
</script>

<div id="article-wrapper" style={hidden ? "opacity: 0%;" : ""}>
  <article id="content">
    <noscript>
      <div>
        <span>we should have a fix for js disabled</span>
      </div>
    </noscript>
    <ArticleHeader {currentPage} frontmatter={frontmatter} headings={headings} />
    <h1><a href="#content">{frontmatter.title}</a></h1>
    <slot />
  </article>
    <DesktopTableOfContents pageTitle={frontmatter.title} {headings} />
</div>

<style lang="scss">
  #article-wrapper {
    box-sizing: border-box;
    grid-column: 1;
    grid-row: 1/2;
    margin-block: var(--spacing-6);
    max-width: 100vw;
  }

  article {
    box-sizing: border-box;
    //max-width: 100vw;
    //width: 100%;
    padding-inline: var(--spacing-8);
    padding-bottom: calc(var(--header-height) + var(--spacing-4));
    padding-top: var(--spacing-6);
  }

  .title {
      margin-top: 0;
      margin-top: 1em;
      font-weight: 700;
      a {
        font-weight: 700;
      }
    }
  aside {
    box-sizing: border-box;
    display: none;
    background: red;
  }

  @media screen and (min-width: calc(768px + 32ch * 2)) {
    #article-wrapper {
      padding-left: 15rem;
    }
  }

  @media screen and (min-width: 768px) {
    :global(body.sideNav-open #article-wrapper) {
      //margin-block: unset;
      grid-column: 2;
      padding-left: 0;
      max-width: calc(100vw - (var(--sideNav-width) + 1.75ch));
    }
    #article-wrapper {
      grid-column: 1/-1;
      grid-row: 2;

      display: flex;
      justify-content: flex-start;
      justify-content: center;
      gap: var(--spacing-4);
    }
    article {
      max-width: 70ch;
      width: 100%;
      padding-top: unset;
      //margin: 0 auto;
      //width: 100%;
      //max-width: calc(75ch - 10vw);
      //max-width: calc(100vw - 45ch - var(--spacing-6));
      //display: inline-block;
    }
    aside {
      //display: inline-block;
    }
  }
</style>
