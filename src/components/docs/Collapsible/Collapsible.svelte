<script lang="ts">
    export let open = false;
    export let title = "Click to expand"
    export let code = false
  </script>
  
  <details bind:open class="styled">
    <summary>
        <slot name="title">
            {#if code}
                <code class="code">{title}</code>
            {:else}
                {title}
            {/if}
        </slot>
    </summary>
    <div class="content">
      <slot/>
    </div>
  </details>

<style lang="scss">
    .styled summary::-webkit-details-marker {
        display: none;
    }

    details {
        border: 2px solid var(--theme-divider);
        border-radius: var(--rounded-3);
        background: var(--theme-bg-hover);
        width: 100%;
        margin-bottom: var(--spacing-4);
    }

    .content {
        padding: 1em;
        padding-top: 0;
    }

    .styled summary {
        list-style: none;
        padding: 1em;
        cursor: default;
        padding-right: 1.5em;
        position: relative;
        font-weight: 500;
    
        &::after {
            content: '';
            border-right: 4px solid;
            border-bottom: 4px solid;
            position: absolute;
            right: 1.2em;
            top: 1.2em;
            height: .5em;
            width: .5em;
            transform: rotate(45deg);
        }

        & :global(p) {
            margin: 0;
        }
    }

    details[open].styled > summary::after {
        transform: rotate(-135deg);
        top: 1.5em;
    }
</style>