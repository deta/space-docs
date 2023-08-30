<script lang="ts">
  import { getMetadata } from "@/utils/metadata";
  import { onMount } from "svelte";

  export let isDocs = false;
  export let isChangelog = false;

  let isDevMode = false;
  let isAuthenticated = false;

  onMount(async () => {
    const data = await getMetadata();
    isDevMode = data.isDevMode;
    isAuthenticated = data.isAuthenticated;
  });
</script>

<div class="links">
  {#if isAuthenticated}
    <a href="/" class="!no-underline text-seashell-800 dark:text-seashell-200 hover:opacity-50 transition">Open Canvas</a>
  {:else}
    <a href="/login" class="!no-underline text-seashell-800 dark:text-seashell-200 hover:opacity-50 transition">Login to Space</a>
  {/if}
</div>
