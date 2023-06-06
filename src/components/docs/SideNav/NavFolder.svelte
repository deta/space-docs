<script lang="ts">
  import IconChevronDown from "@/components/core/Icon/IconChevronDown.svelte";
  import type { NavigationItem } from "@/utils/content";
    import { getCollection } from 'astro:content';
  import NavItem from "./NavItem.svelte";
  import { getContext, onMount } from "svelte";
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";
  import CollapsibleGroup from "./Collapsible/CollapsibleGroup.svelte";

  // PROPS
  export let depth: number,
    navItem: NavigationItem,
    animated = true; // Whether the icon animates on open/close.

  let currentPage = getContext<string>("currentPage");
  let open = currentPage.includes(`${navItem.path}`);
  let active = false

  const collapsibleKey = crypto.randomUUID();
  let activeCollapsibleStore = getContext<Writable<string>>("activeCollapsibleStore");
  if (open) activeCollapsibleStore.set(collapsibleKey);
  $: {
    if (activeCollapsibleStore !== null && $activeCollapsibleStore !== collapsibleKey) {
      open = false;
    }
  }
  // STATE
  //const activeFolder = getContext<Writable<any>>(`activeFolder_${depth}`);

  //open = getContext<string>("currentPage").includes(`${navItem.path}`);
  // HANDLERs
  /*$: {
        if ($activeFolder !== null && ($activeFolder === navItem.href)) open = true;
        if ($activeFolder !== null && ($activeFolder !== navItem.href)) open = false;
    }*/
  /*$: {
        if (getContext(`activeFolder_${depth}`) !== navItem.href) open = false;
    }*/

  onMount(() => {
    if (document) {
      open = document?.location.pathname.includes(navItem.path) || false; //getContext("currentPage");
      active = document?.location.pathname.endsWith(navItem.path) || false
    }
  });

  function onToggle() {
    if (open) {
      activeCollapsibleStore.set(collapsibleKey);
    }
  }
  async function onClickTitle() {
    if (`/docs/en${navItem.path}` === currentPage) return;
    const c = await getCollection("docs", (e => {
        if ((e.id.endsWith("index.md") || e.id.endsWith("index.mdx")) && `/docs/en/${e.id.split("/").slice(0, -1).join("/")}` === `/docs/en${navItem.path}`) return true;
    }))
    if (c.length !== 0) document.location.replace(`/docs/en${navItem.path}`); //TODO: No replace?
    //if (open) setContext(`activeFolder_${depth}`, navItem.href);
    //if (open) $activeFolder = navItem.path; //activeFolder.set(navItem.href);
    /*const activeFolder = getContext<{depth: number, id: string}>("activeFolder");
        if (!activeFolder) setContext("activeFolder", { depth, id: navItem.href }); // TODO: Href as id not optimal? maybe fine
        else {
            if (depth !== activeFolder.depth) return;
            setContext("activeFolder", {depth, id: navItem.href});
        }*/
  }
</script>

<details
  bind:open
  class:nested={depth !== 0}
  class:firstSub={depth === 1}
  class:animated
  style="--depth: {depth - 1};"
  on:toggle={onToggle}>
  <!-- TODO(@maxu): quick hack with class:firstSub, fix!-->
  <!-- --depth: calc({depth -1} * var(--spacing-6)  * 0.9*0.9); -->
  <summary>
    <span>
      <span class="group-icon"
        ><slot name="icon"><IconChevronDown size={24} strokeWidth={2} style="currentColor" /></slot
        ></span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span class="title" class:active={active} on:click={onClickTitle}>{(() => {
                let title = navItem.title;
                switch (title) {
                  case "QuickStarts":
                    return "Quick Starts"
                  case "TheSpaceRuntime":
                    return "The Space Runtime"
                  case "Sdk":
                    return "SDK"
                  case "HttpApi":
                    return "HTTP API"
                  case "SpaceApps":
                    return "Space Apps"
                  case "YourData":
                    return "Your Data"
                  default:
                    return title
                }
            })()}</span>
      <!--<hr />-->
    </span>
  </summary>
  <ul>
    <CollapsibleGroup>
      {#if navItem.subItems}
        {#each navItem.subItems as subItem}
          <NavItem navItem={subItem} depth={depth + 1} />
        {/each}
      {/if}
    </CollapsibleGroup>
  </ul>
</details>

<style lang="scss">
  details {
    width: 100%;

    summary {
      display: flex;
      align-items: center;
      //border-radius: 8px;
      //padding-inline: var(--spacing-6);
      //padding-left: var(--spacing-4);
      color: hsl(var(--color-gray-30));

      span.title {
        padding-left: calc(var(--depth) * var(--indent-width));
        margin-left: calc(-0.7em - var(--depth) * 1.5rem);
      }
      & > span {
        width: 100%;
        padding-left: calc(var(--depth) * 1.5rem);
        padding-block: var(--spacing-1);
        display: flex;
        align-items: center;

        .group-icon {
          flex-grow: 0;
          color: hsl(var(--color-gray-80));
        }
        hr {
          //width: 100%;
          flex-shrink: 1;
        }
      }

      .title {
        margin-left: -0.3rem;
        margin-top: 0.1rem;
        font-weight: 600;
        width: max-content;

        &.active {
          color: var(--theme-accent);
        }
      }

      &:hover {
        cursor: pointer;
        opacity: 80%;
      }
    }
  }
  details:not(.nested) > summary > span {
    color: hsl(var(--color-gray-5));
    font-size: 1.2rem;
    font-weight: 600;
  }
  details.nested > summary > span {
    border-left: 2px solid hsl(var(--color-gray-90));
  }
  details.nested > summary:hover > span {
    border-color: hsl(var(--color-gray-70));
  }
  details.nested.firstSub > summary > span {
    border-left: 2px solid transparent;
  }

  // Icon state
  details > summary .group-icon {
    transform: translateX(-0.4rem) translateY(0rem);
  }
  details.animated > summary .group-icon {
    transform: translateX(-0.5rem) translateY(-0.15rem) rotate(-90deg);
    transition: all ease-out 100ms;
  }
  details[open].animated > summary .group-icon {
    transform: translateX(-0.65rem) rotate(0deg);
  }

  details > summary {
    /* TOOD: Summary fix should be global!? */
    cursor: pointer;
    list-style-type: none;
  }

  details > summary * {
    display: inline;
  }

  details > summary {
  }
  details > summary:hover {
    //background: hsl(var(--color-gray-95));
  }
  details > summary .group-icon {
    flex-grow: 0;
    flex-shrink: 0;
    //color: hsl(var(--color-purple));
    margin-top: 0.4rem;
    margin-left: -0.15rem;
    margin-right: 0.5rem;
  }
  details > summary h2 {
    font-weight: 600;
    font-size: 1.4em;
  }
  details > summary h3 {
    font-weight: 600;
    font-size: 1em;
  }
  details > summary hr {
    margin-left: 1rem;
    height: 1px;
    border: 0;
    background: hsl(var(--color-gray-90));
    flex-grow: 1;
    flex-basis: 1;
  }

  :global(html.theme-dark) details {
    summary {
        color: hsl(var(--color-gray-95));
    }
    &.nested > summary > span {
        border-color: hsl(var(--color-gray-30));
    }
    &.nested > summary:hover > span {
        border-color: hsl(var(--color-gray-70));
    }
    &.nested.firstSub > summary > span {
        border-left: 2px solid transparent;
    }
  }
</style>
