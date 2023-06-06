<script lang="ts">
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconChevronDown from "@/components/core/Icon/IconChevronDown.svelte";
  import IconChevronUp from "@/components/core/Icon/IconChevronUp.svelte";
  import IconListNumbers from "@/components/core/Icon/IconListNumbers.svelte";
  import type { MarkdownHeading } from "astro";
  import { onMount } from "svelte";

  export let collapsable: boolean,
    pageTitle: string | undefined,
    headings: MarkdownHeading[],
    maxDepth: number = 2,
    chevron: boolean = false;

  {
    // Exclude headings too deep & normalize depth !!  needs to bet at the top of script
    const hTMP = headings ? headings.slice() : [];
    const minDepth = hTMP?.sort((a, b) => a.depth - b.depth)[0]?.depth || 0;
    if (minDepth > 1) headings = headings?.map((h) => ({ ...h, depth: h.depth - minDepth + 1 }));
    headings = headings?.filter((h) => h.depth <= maxDepth) || [];
  }

  // STATE
  let open = collapsable ? false : true;

  let iObserver: IntersectionObserver;
  let activeHeadingSlug: string = headings[0].slug;

  // HANDLERS
  function onObserverCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    for (const entry of entries) {
      const { target, isIntersecting } = entry;
      const link = target as HTMLAnchorElement;

      if (isIntersecting) {
        const slug = link.href.split("#")[1];
        activeHeadingSlug = slug;
      }
    }
  }

  // HOOKS
  onMount(() => {
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

<div class="toc">
  {#if collapsable}
    <IconButton on:click={() => (open = !open)}>
      {#if chevron}
        {#if open}
          <IconChevronUp size={20} />
        {:else}
          <IconChevronDown size={20} />
        {/if}
      {:else}
        <IconListNumbers size={20} />
      {/if}
    </IconButton>
  {/if}
  {#if open}
    <nav class:popover={collapsable}>
      <ul>
        {#if pageTitle}
          <li
            class:active={activeHeadingSlug === "content"}
            style="--offset: calc(0 * var(--spacing-3));">
            <a href="#content">{pageTitle}</a>
          </li>
        {/if}
        {#each headings as heading, i}
          <li
            class:active={activeHeadingSlug === heading.slug}
            style="--offset: calc({heading.depth - 1} * var(--spacing-3));">
            <a href="#{heading.slug}">{heading.text}</a>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</div>

<style lang="scss">
  .toc {
    position: relative;

    @media screen and (min-width: calc(768px + 28ch * 2)) {
      display: none; // todo?: Aria hidden
    }
  }

  nav.popover {
    position: absolute;
    z-index: 15;
    top: 2.5rem;
    right: 0;
    width: max-content;

    padding-inline: var(--spacing-1);
    padding-block: var(--spacing-1);

    border-radius: var(--rounded-3);
    border-width: 4px;
    border-style: solid;
    border-color: rgba(240, 238, 234, 0.7);
    box-shadow: 0px 0px 0px 4px rgba(240, 238, 234, 0.3);

    background: var(--theme-sidenav);

    font-size: 1.085em;

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
        a {
          display: block;
          padding: var(--spacing-1) var(--spacing-2);
          padding-left: calc(var(--spacing-3) + var(--offset));
          padding-right: var(--spacing-6);
          color: var(--color-text);
          text-decoration: none;
          border-radius: var(--rounded-2);
          font-weight: 400;

          &:hover {
            background: rgba(220, 218, 214, 0.6);
          }
        }
        &.active {
          a {
            background: var(--theme-accent);
            color: white;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
