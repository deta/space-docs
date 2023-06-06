<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { Writable } from "svelte/store";

  // STATE
  let open = false;
  const collapsibleKey = crypto.randomUUID();
  let activeCollapsibleStore = getContext<Writable<string>>("activeCollapsibleStore");
  $: {
    if (activeCollapsibleStore !== null && $activeCollapsibleStore !== collapsibleKey) {
      open = false;
    }
    console.log($activeCollapsibleStore)
  }

  // HANDLERS
  function onToggle() {
    if (open) activeCollapsibleStore.set(collapsibleKey);
  }
  onMount(() => {
    console.log(getContext("foo"))
  })
</script>

<details bind:open on:toggle={onToggle}>
  <summary> summary </summary>
  <div class="contents">
    <slot/>
  </div>
</details>
