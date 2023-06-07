<script context="module" lang="ts">
  import AstroLogo from "@/components/core/AstroLogo.svelte";
  import { writable, get } from "svelte/store";

  //export const sideNavOpen = writable<boolean>(true);
  export const sideNavOpen = storedJsonWritable<boolean>("sideNavOpen", true);
  export const sideNavPeeking = writable<boolean>(false);

  export function updateBodyClass() {
    if (!document) return;
    if (get(sideNavOpen)) {
      document.body.classList.add("sideNav-open");
    } else {
      document.body.classList.remove("sideNav-open");
    }
  }

  export const toggleSideNav = () => {
    console.log("toggleSideNav")
    //sideNavOpen.update((e) => !e);
    sideNavOpen.set(!get(sideNavOpen));
    updateBodyClass();
  };
</script>

<script lang="ts">
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconChevronsRight from "@/components/core/Icon/IconChevronsRight.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { onMount, setContext } from "svelte";
  import type { NavigationItem } from "@/utils/content";
  import NavSection from "./NavSection.svelte";
  import IconBook2 from "@/components/core/Icon/IconBook2.svelte";
  import IconHammer from "@/components/core/Icon/IconHammer.svelte";
  import IconBolt from "@/components/core/Icon/IconBolt.svelte";
  import IconRocket from "@/components/core/Icon/IconRocket.svelte";
  import { storedJsonWritable } from "@/utils/storedWritable";
  import CollapsibleGroup from "./Collapsible/CollapsibleGroup.svelte";

  // PROPS
  export let navTree: NavigationItem, currentPage: string;

  // STATE
  let innerWidth: number = 400;
  let isHoverPeekingNav = false; // Used to prevent peeking nav from closing when mouse leaves peek trigger but stays inside nav
  let wasDesktopWidth = false;

  setContext("currentPage", currentPage);

  // HANDLERS
  function onBeginPeek() {
    if ($sideNavOpen || innerWidth < 768) return;
    isHoverPeekingNav = true;
    sideNavPeeking.set(true);
  }
  function onEndPeek() {
    if ($sideNavOpen || isHoverPeekingNav) return;
    sideNavPeeking.set(false);
  }
  function onEndNavHover() {
    isHoverPeekingNav = false;
    onEndPeek();
    sideNavPeeking.set(false);
  }
  function onWindowResize() {
    if (innerWidth > 1150) wasDesktopWidth = true;  // Auto hide on resize -> Keep TTY from getting cut of
    else if (wasDesktopWidth) {
      wasDesktopWidth = false;
      sideNavOpen.set(false);
      updateBodyClass();
    }
  }

  // HOOKS
  onMount(() => {
    updateBodyClass();
    if (innerWidth < 768) sideNavOpen.set(false); // TODO: FIX
  });
</script>

<svelte:window bind:innerWidth on:resize={onWindowResize} />

<div
  id="peek-trigger"
  class:active={!$sideNavOpen}
  on:mouseenter={onBeginPeek}
  on:mouseleave={onEndPeek} />
<aside class:open={$sideNavOpen} class:peeking={$sideNavPeeking} on:mouseleave={onEndNavHover}>
  {#if $sideNavOpen || $sideNavPeeking}
    <nav
      transition:fly={{
        duration: 400,
        easing: quintOut,
        x: innerWidth >= 768 ? -100 : 0,
        y: innerWidth < 768 ? 100 : 0
      }}>
      <header class="only-desktop">
        <a href="/docs" class="docs-logo">
          <AstroLogo size={28} />
          <span>Space Docs</span>
        </a>
      </header>

      <div class="nav-tree">
        <ul>
          <CollapsibleGroup>
            <NavSection
              depth={0}
              navItem={navTree.subItems[0]}
              open={currentPage.includes("/learn")}
              animated={false}>
              <svelte:fragment slot="icon">
                <IconBook2
                  size={24}
                  strokeWidth={2}
                  style="currentColor"
                  color="hsl(var(--color-base-purple), 50%)" />
              </svelte:fragment>
            </NavSection>
            <NavSection
              depth={0}
              navItem={navTree.subItems[1]}
              open={currentPage.includes("/build")}
              animated={false}>
              <svelte:fragment slot="icon">
                <IconHammer
                  size={24}
                  strokeWidth={2}
                  style="currentColor"
                  color="hsl(var(--color-base-blue-dark), 50%)" />
              </svelte:fragment>
            </NavSection>
            <NavSection
              depth={0}
              navItem={navTree.subItems[2]}
              open={currentPage.includes("/use")}
              animated={false}>
              <svelte:fragment slot="icon">
                <IconBolt
                  size={24}
                  strokeWidth={2}
                  style="currentColor"
                  color="hsl(var(--color-base-yellow), 50%)" />
              </svelte:fragment>
            </NavSection>
            <NavSection
              depth={0}
              navItem={navTree.subItems[3]}
              open={currentPage.includes("/publish")}
              animated={false}>
              <svelte:fragment slot="icon">
                <IconRocket
                  size={24}
                  strokeWidth={2}
                  style="currentColor"
                  color="hsl(var(--color-base-green), 40%)" />
              </svelte:fragment>
            </NavSection>
          </CollapsibleGroup>
        </ul>
      </div>
    </nav>
  {/if}

  <div class="nav-toggle only-desktop">
    <IconButton on:click={toggleSideNav}>
      <IconChevronsRight size={24} strokeWidth={2} style="color:inherit" />
    </IconButton>
  </div>
</aside>

<style lang="scss">
  // UTILS
  .only-desktop {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .only-mobile {
      display: none;
    }
    .only-desktop {
      display: inherit;
    }
  }

  #peek-trigger {
    background: transparent;
    position: fixed;
    z-index: 100;
    top: var(--header-height);
    height: calc(100% - calc(2 * var(--header-height)));
    left: 0;
    width: 6vw;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    pointer-events: none;

    &.active {
      pointer-events: all;
    }
  }

  // DEKTOP NAV TOGGLE
  // TODO make desktop only
  aside .nav-toggle {
    position: fixed;
    z-index: 10000;
    bottom: var(--spacing-2);
    left: var(--spacing-2);
    color: hsl(var(--color-gray-50));
    transition: color 0.1s ease-in-out;
    &:hover {
      color: hsl(var(--color-gray-10));
    }
  }
  aside.open .nav-toggle {
    left: unset;
    left: calc(var(--sideNav-width) - var(--spacing-2) * 7);
  }
  :global(aside .nav-toggle svg) {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
  }
  :global(aside.open .nav-toggle svg) {
    transform: rotate(180deg);
  }

  // MOBILE
  aside {
    position: fixed;
    z-index: 101;
    top: var(--spacing-18);
    left: 0;
    right: 0;
    bottom: 0;

    nav {
      display: none;
      position: relative;
      z-index: 1001;
      flex-direction: column;
      //margin-top: var(--spacing-18);
      //height: calc(100% - var(--header-height) - var(--spacing-12));
      height: 100%;
      padding-block: var(--spacing-4);
      padding-inline: var(--spacing-6);

      background: var(--theme-sidenav);
      background: rgb(240, 238, 234);
      border-width: 4px 4px 4px 4px;
      margin-inline: var(--spacing-4);
      border-style: solid;
      border-color: rgba(240, 238, 234, 0.7);
      box-shadow: 0px 0px 0px 4px rgba(240, 238, 234, 0.3);
      border-radius: var(--rounded-4) var(--rounded-4) 0 0;
    }
  }

  // MOBILE OPEN
  @media screen and (max-width: 767px) {
    :global(body.sideNav-open aside) {
      //background: rgba(0, 0, 0, 0.2);
      nav {
        display: block;
        display: flex;
      }
    }
  }
  aside.open {
    //top: 0;
  }

  @media screen and (min-width: 768px) {
    // DESKTOP
    aside {
      box-sizing: border-box;
      position: relative;
      grid-column: 1;
      grid-row: 1 / -1;
      z-index: 101;
      top: 0;
      right: unset;
      bottom: 0;
      width: fit-content;
      width: auto;
      //min-width: calc(2 * var(--spacing-4) + 1.5rem);

      background: transparent;
      //width: 35ch;

      nav {
        //display: block;
        display: flex;
        box-sizing: border-box;
        position: fixed;
        top: 0px;
        margin-top: 0;
        margin-inline: 0;
        height: 100%;
        max-width: var(--sideNav-width);
        width: var(--sideNav-width);

        border-width: 0 4px 0 0;
        border-radius: 0;
        box-shadow: none;

        background: var(--theme-sidenav);
        //background: rgba(240,60,60,0.7);

        header {
          margin-top: 0.3rem;
          margin-bottom: var(--spacing-6);
          a.docs-logo {
            display: flex;
            align-items: center;
            gap: var(--spacing-3);

            > span {
              flex-shrink: 0;
              font-weight: 600;
              font-size: 1.25em;
            }
          }
        }
      }

      &.open {
        width: var(--sideNav-width);
      }
    }

    // DEKSTOP PEEKING

    // DESKTOP OPEN
    aside.open {
      nav {
      }
    }
  }

  // TOOD: move
  .nav-tree {
    flex: 1;
    overflow-y: auto;
    padding-block: var(--spacing-4);
    margin-inline: -0.25rem;

    ul {
      font-size: 0.875rem;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-6);
    }
  }
  @media screen and (min-width: 768px) {
    .nav-tree {
      margin-top: calc(var(--spacing-4) + 0.5rem);
    }
  }

  // DARK MODE
  :global(html.theme-dark) {
    aside {
        nav {
            background: hsl(var(--color-gray-10));
            border-color: hsl(var(--color-gray-20));
        }
        .nav-toggle:hover {
            color: hsl(var(--color-gray-95));
        }
    }
  }

  .docs-logo {
    color: var(--theme-color);
  }
</style>
