<script context="module" lang="ts">
    export type Tab = {
        label: string;
        value: string;
    };
</script>
<script lang="ts">
  import { storedJsonWritable } from "@/utils/storedWritable";

    export let tabs: Tab[] = [],
        tabsKey: string, // The key to store selection in localStorage
        defaultTab: string = "";

    //let activeTab = storedWritable(`tabs_${tabsKey}`, tabs.find(e => e.label === defaultTab) || tabs[0].value);
</script>

<div>
    <div> <!-- Tab scroll overflow -->
        <div> <!-- Button container -->
            {#each tabs as tab}
            <button
                type="button"
                on:click={() => {}}
                >
                {tab.label}
            </button>
            {/each}
        </div>
    </div>
    tasbbs
</div>

<style lang="scss">

</style>

