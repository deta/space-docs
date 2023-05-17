<script lang="ts">
  import IconChevronRight from "@/components/core/Icon/IconChevronRight.svelte";

  type Breadcrumb = {
    name: string;
    url: string;
  };

  export let items: Breadcrumb[] = [];
</script>

<ul>
  {#each items as item, i}
    {#if i < items.length - 1}
      <!-- TODO: Might not be relevant if we would have section "summary" pages --->
      <li><a href="{item.url}" class:active={i === items.length - 1}>{item.name}</a></li>
    {:else}
      <li><span>{item.name}</span></li>
    {/if}
    {#if i < items.length - 1}
      <li><span>//</span></li>
      <!--<li style="margin-top: 0.1em;"><IconChevronRight size={14} strokeWidth={i < items.length - 2 ? 2 : 2}/></li>-->
    {/if}
  {/each}
</ul>

<style lang="scss">
  a {
    /* TODO: FIX*/
    color: black;
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    //font-size: 0.8rem;

    li a,
    li span {
      padding: 0.1rem 0.4rem; //var(--spacing-1) var(--spacing-2);
      border-radius: 7px;
    }
  }

  ul li a:hover {
    background: hsl(var(--color-gray-90));
  }
  ul li:last-child {
    font-weight: 700;
  }
</style>
