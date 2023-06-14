<script lang="ts" context="module">
  export type Theme = "light" | "dark";

  export function getSystemTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  const themeStore = storedRawWritable<Theme | "null">("theme", "null");

  export function setTheme(theme: Theme) {
    themeStore.set(theme);
    if (theme === "dark") {
      document.documentElement.classList.add("theme-dark");
    } else {
      document.documentElement.classList.remove("theme-dark");
    }
  }
</script>

<script lang="ts">
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconMoon from "@/components/core/Icon/IconMoon.svelte";
  import IconSun from "@/components/core/Icon/IconSun.svelte";
  import { storedRawWritable } from "@/utils/storedWritable";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  // TODO: IMPL
  let theme: "light" | "dark" = "light";

  function onToggleTheme() {
    const newTheme = get(themeStore) === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  onMount(() => {
    const currentTheme = get(themeStore);
    if (currentTheme === "null") {
      themeStore.set(getSystemTheme());
    }
  });
</script>

<IconButton on:click={onToggleTheme}>
  {#if theme === "light"}
    <IconSun />
  {:else}
    <IconMoon />
  {/if}
</IconButton>
