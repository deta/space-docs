<script lang="ts">
import { onMount } from 'svelte';

/*
    As teletype is a private package it might not be installed.
    This allows us to optionally include and use teletype based on a simple flag.
*/

const useTeletype = import.meta.env.PUBLIC_TELETYPE_INSTALLED === 'true'

let Teletype: any;
onMount(async () => {
    if (useTeletype) {
        const importModule = await import('./Teletype.svelte')
        Teletype = importModule.default
    }
})
</script>

{#if Teletype}
    <svelte:component this={Teletype} />
{/if}
