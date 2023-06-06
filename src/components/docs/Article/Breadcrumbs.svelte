<script lang="ts">
  import IconChevronRight from "@/components/core/Icon/IconChevronRight.svelte";
  import IconHome from "@/components/core/Icon/IconHome.svelte";

  type Breadcrumb = {
    name: string;
    url: string;
  };

  export let currentPage: string;

  // Build breadcrumbs paths & ignore /docs/<lang> prefix
    $: segments = !currentPage ? [] : currentPage.split('/').filter(Boolean).slice(2);
    $: prefix = !currentPage ? '' : currentPage.split('/').slice(0, 3).join('/');
    $: items = segments.reduce((acc, segment, i) => {
      const pathToSegment = segments.slice(0, i + 1).join('/');
      const words = segment.split('-').join(' ').split(' ')
      const name = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      const url = `${prefix}/${pathToSegment}`;
      acc.push({ name, url });
      return acc;
    }, [] as any[]);
</script>

<ul>
  <li><span class="divider">/</span></li>
  {#each items as item, i}
    <li>
      {#if i < items.length - 1}
        <a href={item.url}>{item.name}</a>
      {:else}
        <a href="#content" class="final">{item.name}</a>
      {/if}
    </li>
    {#if i < items.length - 1}
      <li><span class="divider">/</span></li>
      <!--<li style="margin-top: 0.1em;"><IconChevronRight size={14} strokeWidth={i < items.length - 2 ? 2 : 2}/></li>-->
    {/if}
  {/each}
</ul>

<style lang="scss">
  a {
    /* TODO: FIX*/
    color: #000;
    text-decoration: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    //gap: var(--spacing-1);
    //font-size: 0.8rem;

    li {
      list-style: none;
    }
    li a,
    li span {
      padding: 0.1rem 0.4rem; //var(--spacing-1) var(--spacing-2);
      border-radius: 7px;
      font-weight: 400;
    }
  }

  ul li a:hover {
    background: hsl(var(--color-gray-90));
  }

  .divider {
    color: hsl(var(--color-gray-80));
  }

  .final {
    font-weight: 600;
  }
  /*ul li:last-child {
    font-weight: 700;
  }*/
  :global(html.theme-dark) a {
    color: var(--theme-text);
  }
  :global(html.theme-dark) ul {
    li a:hover {
      background: hsl(var(--color-gray-20));
      color: #fff;
    }
  }
</style>
