<script lang="ts">
  import { onMount } from "svelte";
  import Breadcrumbs from "./Breadcrumbs.svelte";
  import MobileTableOfContents from "./TableOfContents/MobileTableOfContents.svelte";
  import type { docsSchema } from "@/content/config";
  import type { z } from "astro/zod"
  import type { MarkdownHeading } from "astro";

  export let currentPage: string;
  export let frontmatter: z.infer<typeof docsSchema>;
  export let headings: MarkdownHeading[];

  let stuck = false

  onMount(() => {
    const el = document.querySelector(".track-me")
    console.log(el)
    const observer = new IntersectionObserver(
      ([e]) => {
        stuck = e.intersectionRatio < 1
      },
      { threshold: [1] }
    );

    observer.observe(el!);
  })

</script>

<section class="only-desktop track-me" class:stuck={stuck}>
  <div class="inner">
    <Breadcrumbs currentPage={currentPage} stuck={stuck} />

    <div class="toc">
      <MobileTableOfContents chevron pageTitle={frontmatter.title} {headings} collapsable={true} maxDepth={frontmatter && frontmatter.tocDepth || 2}/>
    </div>

  </div>
</section>

<style lang="scss">
  section {
    position: sticky;
    top: -1px;
    z-index: 100;
    //margin-bottom: var(--spacing-4);

    &.stuck {
      padding-top: calc((var(--header-height) / 2) - 12px);
    }
  }

  .inner {
    display: flex;
    align-items: center;
  }

  //@media screen and (max-width: 1280px) {
    .stuck .inner {
      position: fixed;
      top: calc(1.5rem - 6px);
      left: calc(150px + 2rem);
      justify-content: unset;
      gap: 0rem;
    }

    :global(.sideNav-open) .stuck .inner {
      position: sticky;
      top: -1px;
      left: unset;
    }

    .toc {
      display: block;
    }

    @media screen and (min-width: calc(768px + 21ch * 2)) {
      .toc {
        display: none;
      }

      .stuck .inner {
        top: calc((var(--header-height) / 2) - 12px);
      }
    }
</style>
