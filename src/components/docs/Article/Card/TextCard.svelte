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
        border-radius: var(--rounded-4);
        border: 2px solid hsl(var(--color-gray-60));

        padding: var(--spacing-3) var(--spacing-5);

        header {
            margin-bottom: 0.75rem;
            .title {
                font-weight: 700;
                font-size: 1.25em;
            }
        }
        footer {
            margin-top: var(--spacing-4);
        }
    }

    .card.blue {
        //background: hsl(var(--color-base-blue-dark), 55%);
        //color: white;
    }
    .card.yellow {
        background: #FFE4AD;
    }
</style>