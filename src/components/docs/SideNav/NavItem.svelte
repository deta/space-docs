<script lang="ts">
  import type { NavigationItem } from "@/utils/content";
  import NavSection from "./NavSection.svelte";
  import { getContext } from "svelte";

    // PROPS
    export let  active = false,
                depth = 1,
                navItem: NavigationItem;

    active = navItem.path === getContext("currentPage");
</script>

<li class:folder={navItem.subItems} class:active style="--depth: calc({depth} * var(--spacing-4));">
    {#if (navItem.subItems && navItem.subItems.length > 0)}
    <NavSection {navItem} {depth}/>
    {:else}
    <a href={navItem.path} class="reset"><span>{navItem.title}</span></a>
    {/if}
</li>

<style lang="scss">
    li {
        display: flex;

        a {
            width: 100%;
            display: flex;
            padding-inline: var(--spacing-6);
            border-radius: 7px;
            border-top: 0;
            border-bottom: 0;

            &:hover {
                background: hsl(var(--color-gray-95));
            }

            span {
                padding-block: var(--spacing-1);
                //padding-left: var(--spacing-4);
                padding-left: var(--depth);
                border-left: 2px solid hsl(var(--color-gray-90));
            }
        }

        &.active a span {
            border-color: hsl(var(--color-gray-5));
            font-weight: 600;
        }
    }
</style>