<script>
  import IconButton from "./core/Button/IconButton.svelte";
  import IconMoon from "./core/Icon/IconMoon.svelte";
  import IconSun from "./core/Icon/IconSun.svelte";
  import { theme, setTheme } from "../utils/theme";

</script>

<IconButton on:click={setTheme('light')}>
  {#if theme === "light"}
    <IconSun />
  {:else}
    <IconMoon />
  {/if}
</IconButton>
