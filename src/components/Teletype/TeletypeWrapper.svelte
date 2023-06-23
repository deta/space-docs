<script lang="ts">
import { onMount } from 'svelte';

/*
    As teletype is a private package it might not be installed.
    This allows us to optionally include and use teletype based on a simple flag.
*/

const useTeletype = import.meta.env.PUBLIC_TELETYPE_INSTALLED === 'true'

let Teletype: any;
let ttyElement: HTMLElement;
onMount(async () => {
    if (useTeletype) {
        const importModule = await import('./Teletype.svelte')
        Teletype = importModule.default
    }
    if (ttyElement) {
        ttyElement.classList.add("tty");
    }
})
</script>

{#if Teletype}
    <svelte:component bind:this={ttyElement} this={Teletype}/>
{/if}

<style lang="scss">
    :global(.tty) {
        z-index: 200;
    }
</style>