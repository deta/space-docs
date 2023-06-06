<script context="module" lang="ts">
  import AstroLogo from "@/components/core/AstroLogo.svelte";
  import { writable , get} from "svelte/store";

  export const sideNavOpen = writable<boolean>(true);
  export const sideNavPeeking = writable<boolean>(false);
  export const toggleSideNav = () => {
    sideNavOpen.update((e) => !e);
    if (get(sideNavOpen)) {
        document.body.classList.add("sideNav-open");
    }
    else {
        document.body.classList.remove("sideNav-open");
    }
  }
</script>

<script lang="ts">
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconChevronsRight from "@/components/core/Icon/IconChevronsRight.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  // STATE
  let innerWidth: number = 400;
  let isHoverPeekingNav = false; // Used to prevent peeking nav from closing when mouse leaves peek trigger but stays inside nav
  let wasDesktopWidth = false;

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
    if (innerWidth > 768) wasDesktopWidth = true;
    else if (wasDesktopWidth) {
      wasDesktopWidth = false;
      sideNavOpen.set(false);
    }
  }
</script>

<svelte:window bind:innerWidth on:resize={onWindowResize} />

<div
  id="peek-trigger"
  class:active={!$sideNavOpen}
  on:mouseenter={onBeginPeek}
  on:mouseleave={onEndPeek} />
<aside class:open={$sideNavOpen} class:peeking={$sideNavPeeking}>
  {#if $sideNavOpen || $sideNavPeeking}
    <nav
      on:mouseleave={onEndNavHover}
      transition:fly={{
        duration: 400,
        easing: quintOut,
        x: innerWidth >= 768 ? -100 : 0,
        y: innerWidth < 768 ? 100 : 0
      }}>
      <header class="only-desktop">
        <a href="/docs" class="docs-logo">
          <AstroLogo size={28} />
          <span>SpaceDocs</span>
        </a>
      </header>

      sidebar content
    </nav>
  {/if}

  <div class="nav-toggle">
    <!-- only-desktop -->
    <IconButton on:click={toggleSideNav}>
      <IconChevronsRight size={24} strokeWidth={2} />
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
    z-index: 15;
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
    position: absolute;
    z-index: 100;
    bottom: var(--spacing-2);
    left: var(--spacing-2);
  }
  aside.open .nav-toggle {
    left: unset;
    right: var(--spacing-2);
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
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: var(--header-height);

    nav {
      position: relative;
      z-index: 100;
      margin-top: var(--spacing-16);
      height: calc(100% - var(--header-height) - var(--spacing-8));
      padding-block: var(--spacing-4);
      padding-inline: var(--spacing-6);

      background: var(--theme-sidenav);
      background: rgb(240, 238, 234);
      border-width: 4px 4px 4px 0px;
      border-style: solid;
      border-color: rgba(240, 238, 234, 0.7);
      box-shadow: 0px 0px 0px 4px rgba(240, 238, 234, 0.3);
      border-radius: var(--rounded-4) var(--rounded-4) 0 0;
    }
  }

  // MOBILE OPEN
  aside.open {
    top: 0;
  }

  @media screen and (min-width: 768px) {
    // DESKTOP
    aside {
      z-index: 20;
      top: 0;
      right: unset;
      bottom: 0;
      width: auto;
      min-width: calc(2 * var(--spacing-4) + 1.5rem);

      background: transparent;
      //background: lime;
      //width: 35ch;

      nav {
        margin-top: 0;
        height: 100%;
        max-width: 28ch;
        min-width: fit-content;

        border-width: 0 4px 0 0;
        border-radius: 0;
        box-shadow: none;

        background: var(--theme-sidenav);
        background: rgba(240,60,60,0.7);

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

      &.open nav {
        min-width: 28ch;
      }
    }

    // DEKSTOP PEEKING

    // DESKTOP OPEN
    aside.open {
      nav {
      }
    }
  }
</style>
