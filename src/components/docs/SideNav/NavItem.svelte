<script lang="ts">
  import type { NavigationItem } from "@/utils/content";
  import NavFolder from "./NavFolder.svelte";
  import { getContext, onMount } from "svelte";

    // PROPS
    export let  active = false,
                depth = 1,
                navItem: NavigationItem;

    onMount(() => {
        if (document) {
            let docPath = document?.location.pathname;
            const navUrl = new URL(navItem.path, document?.location.origin);
            if (docPath.endsWith("/")) docPath = docPath.slice(0, -1);
            active = docPath === navUrl.pathname;
        }
    })
</script>

<li class:folder={navItem.subItems} class:active style="--depth: {depth};"><!-- --depth: calc({depth} * var(--spacing-4)); -->
    {#if (navItem.subItems && navItem.subItems.length > 0)}
        <NavFolder {navItem} {depth}/>
    {:else}
        <a href={navItem.path} class="reset"><span>{navItem.title || navItem.path.split("/").slice(-1)}</span></a> <!-- TODO: Remove the slice stuff, just temporary till all titles are there -->
    {/if}
</li>

<style lang="scss">
    li {
        display: flex;

        a {
            width: 100%;
            display: flex;
            //padding-inline: var(--spacing-6);
            //padding-left: 1.1rem;
            //border-radius: 7px;
            border-top: 0;
            border-bottom: 0;

            &:hover {
                //background: hsl(var(--color-gray-80));
                span {
                    border-color: hsl(var(--color-gray-70));
                }
            }

            span {
                padding-block: var(--spacing-2);
                //padding-left: var(--spacing-4);
                padding-left: calc(var(--depth) * var(--indent-width));//var(--depth);
                border-left: 2px solid hsl(var(--color-gray-90));
            }
        }

        &.active a span {
            color: var(--theme-accent);
            border-color: hsl(var(--color-gray-5));
            border-color: var(--theme-accent);
            font-weight: 600;
        }
    }
</style>