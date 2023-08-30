<script lang="ts">
  import type { MarkdownHeading } from "astro";
  import { onMount } from "svelte";

  export let pageTitle: string | undefined,
    headings: MarkdownHeading[],
    maxDepth: number = 2,
    blur = true;

  {
    // Exclude headings too deep & normalize depth !!  needs to bet at the top of script
    const hTMP = headings ? headings.slice() : [];
    const minDepth = hTMP?.sort((a, b) => a.depth - b.depth)[0]?.depth || 0;
    if (minDepth > 1) headings = headings?.map((h) => ({ ...h, depth: h.depth - minDepth + 1 }));
    headings = headings?.filter((h) => h.depth <= maxDepth) || [];
  }

  const FADE_OUT_DELAY = "1000ms";

  // STATE
  let visible = true;
  let iObserver: IntersectionObserver;
  let activeHeadingSlug: string = headings ? headings[0]?.slug : "";
  let visibleHeadings: string[] = [];

  // HANDLERS
  function onObserverCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    for (const entry of entries) {
      const { target, isIntersecting } = entry;
      const link = target as HTMLAnchorElement;
      const slug = link.href.split("#")[1];
      if (!slug) {
        console.warn("No slug found for heading link! This should not happen!", link);
        continue;
      }
      if (isIntersecting) {
        activeHeadingSlug = slug;
      }
      /*if (isIntersecting) {
        visibleHeadings.push(slug);
        activeHeadingSlug = slug;
        visibleHeadings.sort((a, b) => {
          const aIndex = headings.findIndex((h) => h.slug === a);
          const bIndex = headings.findIndex((h) => h.slug === b);
          return aIndex - bIndex;
        });
      } else {
        // Remove the link element from the visibleHeadings array
        visibleHeadings.splice(visibleHeadings.indexOf(slug), 1);
      }
      activeHeadingSlug =
          visibleHeadings[visibleHeadings.length - 1] ===
          headings[headings.length - 1]?.slug
            ? headings[headings.length - 1]?.slug
            : visibleHeadings[0];
      visibleHeadings = visibleHeadings;*/
    }
  }
  function onLinkClick(slug: string) {
    //activeHeadingSlug = slug;
  }

  // HOOKS
  onMount(() => {
    setTimeout(() => {
      visible = false;
    }, 50);
    iObserver = new IntersectionObserver(onObserverCallback, {
      rootMargin: "0px",
      threshold: 1
    });

    for (const headingEl of document
      .querySelector("article")
      ?.querySelectorAll("h1, h2, h3, h4, h5, h6") || []) {

      const link = headingEl.querySelector("a") as HTMLAnchorElement;
      iObserver.observe(link); // TODO: onDestroy -> unobserve
    }
  });
</script>

<aside class="toc" class:visible>
  {#if headings?.length > 0}
    <nav>
      <span style="font-weight:600;">On this page</span>
      <ul style="margin-top:1rem;" class:show-all={activeHeadingSlug === 'content'}>
        {#each headings as heading, i}
          <li
            class:active={activeHeadingSlug === heading.slug}
            class:reset={!blur}
            style="--offset: calc({heading.depth - 1} * var(--spacing-3));">
            <a on:click={() => onLinkClick(heading.slug)} href="#{heading.slug}">{heading.text}</a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</aside>

<style lang="scss">
  .toc {
    /*position: sticky;
    top: calc(var(--header-height) + var(--spacing-4));
    */
    display: none;
    //padding-right: var(--spacing-8);
    width: fit-content;
    max-width: 30ch;
    width: 100%;
    padding-right: var(--spacing-4);

    @media screen and (min-width: calc(768px + 21ch * 2)) {
      display: inline-block;
    }
  }
  nav {
    position: sticky;
    top: var(--spacing-16);
    top: calc(var(--header-height) + var(--spacing-2));
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      flex-direction: column;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .toc {
    font-size: 0.875rem;
    position: sticky;
    top: 5.5rem;
    //max-width: 35ch;

    nav > span {
      color: hsl(var(--color-gray-70));
      color: hsl(var(--color-gray-5));
      transition: color ease-in 200ms 0ms;
    }
    li {
      a {
        overflow: hidden;
        opacity: 0.1;
        transition: opacity ease-in 200ms 1250ms;
        //transition: opacity ease-in-out 400ms 0s;
        transition: color 0.2s ease-in-out;
        //transition: all 0.2s ease-in-out;
      }
      transition: border-color 0.2s ease-in-out;
    }

    /*&:hover {
            li a {
                width: auto;
                opacity: 100;
                transition: opacity ease-in-out 200ms 0s;
            }
        }*/

    li {
      border-left: 2px hsl(var(--color-gray-95)) solid;
      padding-left: var(--spacing-4);
      &:not(.reset) {
        filter: blur(1px);
      }
      will-change: filter, border-color, color;
      transition: filter 0.2s ease-in-out;

      &.active {
        filter: unset;
        border-color: hsl(var(--color-gray-70));
        //border-color: var(--theme-accent);
        font-weight: 600;

        a {
          opacity: 0.5;
        }
        //color: var(--theme-accent);
      }
      &:hover:not(.active) {
        border-color: hsl(var(--color-gray-50));
        a {
          color: var(--theme-text-light);
        }
      }

      a {
        width: 100%;
        box-decoration-break: clone;
        //padding-left: calc(var(--depth) * var(--spacing-4));
        padding-left: var(--offset);
        padding-block: calc(var(--spacing-1) / 2);

        //opacity: 0;
        transition: opacity ease-in 200ms;
        //animation: 1s ease-in-out 2s 1 normal forwards  paused loadFadeOut;
        //animation: loadFadeOut 1s;
        //animation-fill-mode: forwards;
      }
    }
  }

  .toc {
  }
  .toc.visible {
    li a {
      opacity: 100;
    }
  }
  .toc:hover, .show-all {
    nav > span {
      color: hsl(var(--color-gray-5));
      transition: color ease-in-out 200ms 0;
    }
    li {
      border-color: hsl(var(--color-gray-80));
      filter: unset;
      &.active {
        border-color: hsl(var(--color-gray-5));
      }
      a {
        opacity: 100;
        transition: opacity ease-in-out 200ms 0s;
      }
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 0.01;
    }
    100% {
      opacity: 0;
    }
  }

  :global(html.theme-dark) .toc {
    nav > span {
      color: hsl(var(--color-gray-90));
      transition: color ease-in 200ms 0ms;
    }

    li {
        border-color: hsl(var(--color-gray-30));
       &.active {
        border-color: #fff;
        }
    }
  }
</style>
