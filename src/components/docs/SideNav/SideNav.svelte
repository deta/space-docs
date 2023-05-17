<script context="module" lang="ts">
  import { writable } from "svelte/store";

  export const sideNavOpen = writable<boolean>(true);
  export const sideNavPeek = writable<boolean>(false);

  export function toggleSideNav() {
    sideNavOpen.update((open) => !open);
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

  // PROPS
  export let navTree: NavigationItem, currentPage: string;

  // STATE
  let isHoverPeekingNav = false; // Used to prevent peeking nav from closing when mouse leaves peek trigger but stays inside nav

  setContext("currentPage", currentPage);

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
    <nav class:peek={!$sideNavOpen && $sideNavPeek} on:mouseleave={onEndNavHover}>
      <header>
        <a href="/docs">
          <AstroLogo size={28} />
          <span class="title">Space Docs</span>
        </a>
      </header>
      <div class="nav-tree">
        <ul>
            <NavSection depth={0} navItem={navTree.subItems[0]} open={true} animated={false}>
                <svelte:fragment slot="icon">
                    <IconBook2 size={28} strokeWidth={1.5} style="currentColor" color="hsl(var(--color-base-purple), 50%)" />
                </svelte:fragment>
            </NavSection>
            <NavSection depth={0} navItem={navTree.subItems[1]} animated={false}>
                <svelte:fragment slot="icon">
                    <IconHammer size={28} strokeWidth={1.5} style="currentColor" color="hsl(var(--color-base-blue-dark), 50%)" />
                </svelte:fragment>
            </NavSection>
        </ul>
      </div>
      <footer>
        <span class="title"
          >Resources <hr /></span>
        <ul>
          <li><a href="/">Community Discord <IconExternalLink size={16} /></a></li>
          <li><a href="/">Changelog <IconExternalLink size={16} /></a></li>
        </ul>
      </footer>
    </nav>
  {/if}
</aside>

<style lang="scss">
  #peek-trigger {
    background: transparent;
    position: fixed;
    z-index: 15;
    top: 4rem;
    bottom: 4rem;
    left: 0;
    width: 5vw;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    pointer-events: none;

    &.active {
      pointer-events: all;
    }
  }

  aside {
    grid-column: 1 / -1;

    @media screen and (min-width: 768px) {
      //display: none;
      position: absolute;

      &.open {
        position: unset;
        //display: block;
        grid-column: 1;
        grid-row: 1 / -1;
      }
    }

    &.open {
      // Sticky nav when open
      nav {
        border-width: 0px 4px 0px 0px;
        border-style: solid;
        border-color: rgba(240, 238, 234, 0.7);
        box-shadow: 0px 0px 0px 4px rgba(240, 238, 234, 0.3);

        @media screen and (min-width: 768px) {
          position: sticky;
          left: unset;
          bottom: unset;
          right: unset;
          top: unset;
          top: 0;

          height: 100vh;

          padding-bottom: unset;
          padding-top: unset;
        }
      }
    }

    nav {
      height: 40ch;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;

      max-height: 100vh; // TODO: Do we need this?

      padding-inline: var(--spacing-4);

      background: hsl(var(--color-gray-95));
      border-width: 4px 4px 4px 0px;
      border-style: solid;
      border-color: rgba(240, 238, 234, 0.7);
      box-shadow: 0px 0px 0px 4px rgba(240, 238, 234, 0.3);
      border-radius: 0 1rem 1rem 0;

      // fixed peek nav
      @media screen and (min-width: 768px) {
        position: fixed;
        right: unset;
        left: 0;
        top: 5rem;
        bottom: 5rem;

        height: unset;

        padding-bottom: unset;
      }
    }
  }

  /* SIDEBAR inner styling */
  aside nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      min-width: 25ch;

      padding-block: var(--spacing-4);
      padding-inline: var(--spacing-4);

      a {
        display: flex;
        align-items: center;
        gap: 0.85rem;

        .title {
          margin-top: 0.2rem;
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }

    footer {
      flex-grow: 0;
      margin-top: var(--spacing-4);
      padding-block: var(--spacing-4);

      & > span.title {
        display: flex;
        gap: var(--spacing-6);
        font-weight: 600;
        padding-inline: var(--spacing-4);
        margin-bottom: var(--spacing-2);

        hr {
          margin-top: 0.7em;
          height: 1px;
          border: 0;
          background: hsl(var(--color-gray-90));
          flex-grow: 1;
          flex-basis: 1;
        }
      }

      ul {
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;

        li {
          width: 100%;
          display: flex;
          a {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 0.5rem;
            padding-inline: var(--spacing-4);
            padding-block: var(--spacing-2);

            &:hover {
              cursor: pointer;
              background: hsl(var(--color-gray-90));
            }
          }
        }
      }
    }

    .nav-tree {
        flex: 1;
        overflow-y: auto;

        ul {
            font-size: 0.875rem;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-4);
        }
    }
  }
</style>
