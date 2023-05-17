<script lang="ts">
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconRocket from "@/components/core/Icon/IconRocket.svelte";
  import IconSun from "@/components/core/Icon/IconSun.svelte";

  // TODO: IMPL
  let theme: "light" | "dark" = "light";

  function onToggleTheme() {
    theme === "light" ? (theme = "dark") : (theme = "light");
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark')
    } else {
      document.documentElement.classList.remove('theme-dark')
    }
  }
</script>

<IconButton
  on:click={onToggleTheme}>
  {#if theme === "light"}
    <IconSun />
  {:else}
    <IconRocket />
  {/if}
</IconButton>
