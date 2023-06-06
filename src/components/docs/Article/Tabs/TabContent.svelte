<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

  export let key: string;

  let active = false;
    const activeStore = getContext<Writable<string>>("activeStore");
    $: active = $activeStore === key;
    console.log("cnt: ",activeStore)

</script>

<div class="content" class:active>
    <slot/>
</div>

<style lang="scss">
    .content {
        display: none;

    }
    .active {
            display: block;
            background: red;
        }
</style>