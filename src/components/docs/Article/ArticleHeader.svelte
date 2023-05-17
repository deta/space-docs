<script lang="ts">
    export let title: string, excerpt: string | undefined;
</script>

<section>
    <h1>{title}</h1>
    {#if excerpt}
    <p class="lead">{excerpt}</p>
    <hr/>
    {/if}
</section>

<style lang="scss">
    section {
        margin-bottom: var(--spacing-12);

        h1 {
            margin-top: 0;
        }
    }

    hr {
        margin-block: var(--spacing-6);
        color: hsl(var(--color-gray-95), 40%);
    }
</style>