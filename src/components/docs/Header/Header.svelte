<script lang="ts">
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import IconMenu2 from "@/components/core/Icon/IconMenu2.svelte";
  import { toggleSideNav } from "../SideNav/SideNav.svelte";

  function onToggleNav() {
    toggleSideNav();
  }
</script>

<header>
  <!-- TODO(@maxu): Skip to content link-->
  <!-- LEFT SIDE -->
  <div>
    <ul>
      <li>
        <IconButton on:click={onToggleNav}
          ><IconMenu2 size={24} strokeWidth={2} /></IconButton>
      </li>
      <li class="only-tablet">breadcrumbs</li>
    </ul>
  </div>

  <!-- RIGHT SIDE-->
  <div class="only-tablet">
    <ul>
      <li>langPicker</li>
      <li><ThemeToggle /></li>
    </ul>
  </div>
</header>

<style lang="scss">
  //@use "@/styles/breakpoints";
  header {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    position: fixed;
    z-index: 20;
    bottom: 0; // TODO: Add bottom margin to container
    left: 0;
    right: 0;
    @media screen and (min-width: 768px) {
        grid-column: 1 / -1;
        grid-row: 1;
        position: sticky;
        top: 0;
        bottom: unset;
    }

    display: flex;
    justify-content: flex-end;
    @media screen and (min-width: 768px) {
        justify-content: space-between;
    }
    align-items: center;
    padding-inline: var(--spacing-2);
    padding-block: var(--spacing-2);

    background: var(--theme-navbar-bg);

    ul {
      display: flex;
      align-items: center;
      gap: var(--spacing-8);
    }

  }
  :global(body.sideNav-open header) {
    grid-column: 2 / -1 !important;
  }

  .only-tablet {
    display: none;
    @media screen and (min-width: 768px) {
      display: unset;
    }
  }
</style>
