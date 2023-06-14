<script lang="ts" context="module">
    export type DropdownOption = {
        label: string
        value: string
    };
</script>
<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import IconSelector from "../Icon/IconSelector.svelte";

    export let options: DropdownOption[], selected: string | undefined;

    const dispatch = createEventDispatcher();

    // STATE
    let selection: DropdownOption = options.find(e => e.value === selected) || options[0];
    let open = false;

    function select(option: DropdownOption) {
        selection = option;
        open = false;
        dispatch("change", selection);
    }
</script>

<div class="dropdown">
    <div class="selection" on:click={() => open = !open}>
        <span class="label">{selection.label}</span>
        <span class="icon"><IconSelector size={18} /></span>
    </div>
    {#if open}
    <div class="content">
        <ul>
            {#each options as option, i}
            {#if option.value !== selection.value}
            <li on:click={() => select(option)}>{option.label}</li>
            {#if i !== options.length -1}
            <hr>
            {/if}
            {/if}
            {/each}
        </ul>
    </div>
    {/if}
</div>

<style lang="scss">
    .dropdown {
        position: relative;

        .selection {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: var(--spacing-4);
            padding: var(--spacing-2) var(--spacing-4);
            border-radius: var(--rounded-3);

            background: #F7F5F2;
            border: 3px solid #F0EEEA;

            .icon {
                display: flex;
                align-items: center;
                margin-top: 0.2em;
            }

            &:hover {
                cursor: pointer;
                background: hsl(var(--color-gray-95));
            }
            &:active {
                background: hsl(var(--color-gray-90));
            }
        }

        .content {
            width: fit-content;
            position: absolute;
            top: var(--spacing-14);
            right: 0;
            padding: var(--spacing-2) var(--spacing-2);

            background: #F7F5F2;
            border: 3px solid #F0EEEA;
            border-radius: var(--rounded-3);

            ul {
                li {
                    padding: var(--spacing-1) var(--spacing-3);
                    border-radius: var(--rounded-2);

                    &:hover {
                        background: hsl(var(--color-gray-90));
                        cursor: pointer;
                    }
                }

                hr {
                    border-color: hsl(var(--color-gray-90));
                    opacity: 20%;
                }
            }
        }
    }

    :global(html.theme-dark) .dropdown {
        .selection {
            background: hsl(var(--color-gray-20));
            border-color: hsl(var(--color-gray-30));

            &:hover {
                cursor: pointer;
                background: hsl(var(--color-gray-30));
            }
        }
        .content {
            background: hsl(var(--color-gray-20));
            border-color: hsl(var(--color-gray-30));
        }
    }
</style>