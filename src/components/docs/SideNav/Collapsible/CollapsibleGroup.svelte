<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  let activeStore = writable<string>("");
  setContext("activeCollapsibleStore", activeStore);
  setContext("foo", "bar");
</script>

<slot/>