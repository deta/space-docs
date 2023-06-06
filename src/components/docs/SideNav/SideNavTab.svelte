<script context="module" lang="ts">
  import { get, writable } from "svelte/store";

  export const sideNavOpen = writable<boolean>(false);
  export const sideNavPeek = writable<boolean>(false);

  export function toggleSideNav() {
    sideNavOpen.update((open) => !open);
    console.log(get(sideNavOpen))
  }
</script>

<script lang="ts">
  import AstroLogo from "@/components/core/AstroLogo.svelte";
  import IconExternalLink from "@/components/core/Icon/IconExternalLink.svelte";
  import type { NavigationItem } from "@/utils/content";
  import NavSection from "./NavSection.svelte";
  import IconBook2 from "@/components/core/Icon/IconBook2.svelte";
  import IconHammer from "@/components/core/Icon/IconHammer.svelte";
  import { setContext } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import IconRocket from "@/components/core/Icon/IconRocket.svelte";
  import IconBolt from "@/components/core/Icon/IconBolt.svelte";
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconChevronsRight from "@/components/core/Icon/IconChevronsRight.svelte";
  import IconChevronLeft from "@/components/core/Icon/IconChevronLeft.svelte";

  // PROPS
  export let navTree: NavigationItem, currentPage: string;
  console.log(navTree)

  // STATE
  let isHoverPeekingNav = false; // Used to prevent peeking nav from closing when mouse leaves peek trigger but stays inside nav

  setContext("currentPage", currentPage); // TODO!: Can just import astro.url.pathname!

  // HANDLERS
  function onBeginPeek() {
    console.log("begin peek");
    if ($sideNavOpen) return;
    isHoverPeekingNav = true;
    sideNavPeek.set(true);
  }
  function onEndPeek() {
    if ($sideNavOpen || isHoverPeekingNav) return;
    console.log("onEndPeek");
    sideNavPeek.set(false);
  }
  function onEndNavHover() {
    isHoverPeekingNav = false;
    onEndPeek();
    sideNavPeek.set(false);
  }

  $: {
    if (typeof window !== "undefined") {
      if ($sideNavOpen) document.body.classList.add("sideNav-open");
      else document.body.classList.remove("sideNav-open");
    }
  }
</script>

<div
  id="peek-trigger"
  class:active={!$sideNavOpen}
  on:mouseenter={onBeginPeek}
  on:mouseleave={onEndPeek} />
<aside class:open={$sideNavOpen}>
  {#if $sideNavOpen || $sideNavPeek}
  <nav>
    foo
  </nav>
  {/if}
  <div class="toggle" style="{($sideNavOpen || $sideNavPeek) ? '' : 'margin-left:var(--spacing-3);'}">
    <IconButton on:click={toggleSideNav}><IconChevronsRight size={24} strokeWidth={2}/></IconButton>
  </div>
</aside>

<style lang="scss">
    aside {
        position: fixed;
        z-index: 20;
        grid-column: 1 / -1;
        grid-row: 1 / -1;

        display: flex;
    }

    // Desktop
    @media screen and (min-width: 768px) {
        aside {
            position: fixed;
            top: var(--header-height);
            height: calc(100vh - var(--header-height));
            grid-column: 1 / -1;
            grid-row: 1 / -1;

            display: flex;
        }

        .toggle {
            /*position: absolute;
            top: 5rem;
            right: 0;
            left: 1rem;
            background: red;
            z-index: 999;*/
        }

        nav {
            /*position: fixed;
            top: var(--header-height);
            height: calc(100vh - var(--header-height));*/

            min-width: 20ch;

            background: gainsboro;
        }
    }
</style>
