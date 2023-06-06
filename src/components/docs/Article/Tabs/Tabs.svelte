<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

    const activeStore = writable<string>("tab1");

    setContext("activeStore", activeStore);
</script>

<div class="tabs">
    <ul>
        <slot name="tabs" />
    </ul>

    <slot name="contents" />
</div>

<style lang="scss">
    .tabs {
        width: fit-content;

        padding: var(--spacing-2) var(--spacing-4);

        background: white;

        border-radius: var(--rounded-3);

        ul {
            display: flex;
        }
    }
</style>