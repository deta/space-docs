<script lang="ts" context="module">
  /*export type Tab = {
    title: string;
    key: string;
  };*/
</script>

<script lang="ts">
  import { pascalCase } from "scule";
  import { createEventDispatcher } from "svelte";

  export let key: string, title: string | undefined;

  if (!title) title = pascalCase(key);

  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch("switch", { key });
  }
</script>

<li>
  <button on:click={onClick}>{title}</button>
</li>
