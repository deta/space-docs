<script lang="ts">
    export let color: "blue" | "yellow" = "yellow";
</script>

<div class="card {color}">
    <header>
        <span class="title"><slot name="title"/></span>
    </header>
    <div>
        <p style="margin: 0;">
            <slot name="text"/>
        </p>
    </div>
    <footer>
        <slot name="footer"/>
    </footer>
</div>

<style lang="scss">
    .card {
        flex-basis: 33.3%;
        flex-grow: 1;
        min-width: 25ch;
        border-radius: var(--rounded-4);
        border: 2px solid hsl(var(--color-gray-60));

        padding: var(--spacing-3) var(--spacing-5);

        header {
            margin-bottom: 0.75rem;
            .title {
                font-weight: 700;
                font-size: 1.5em;
            }
        }
        footer {
            margin-top: var(--spacing-4);
        }
    }

    .card.blue {
        //background: hsl(var(--color-base-blue-dark), 55%);
        //color: white;
        background: #E0E3FF;
        border: 4px solid #B9C8FF;
        border-radius: 13px;
        footer {
            :global(a) {
                color: #806BFF !important;
            }
        }
    }
    .card.yellow {
        background: #FFF3DB;
        border: 4px solid #FFE4AD;
        border-radius: 13px;
        footer {
            :global(a) {
                color: #EC9352 !important;
            }
        }
    }
    :global(html.theme-dark) .card {
        &.blue {
            background: #202026;
            border-color: #4c5162;
        }
        &.yellow {
            background: #25221c;
            border-color: #8f8165;
        }
    }
</style>