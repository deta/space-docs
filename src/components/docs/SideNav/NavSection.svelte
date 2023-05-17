<script lang="ts">
  import IconChevronDown from "@/components/core/Icon/IconChevronDown.svelte";
  import type { NavigationItem } from "@/utils/content";
  import NavItem from "./NavItem.svelte";
  import { getContext } from "svelte";
  import { setContext } from "svelte";
  import type { Writable } from "svelte/store";

  // PROPS
  export let depth: number,
    navItem: NavigationItem,
    open = false,
    animated = true; // Whether the icon animates on open/close.

  // STATE
  const activeFolder = getContext<Writable<any>>(`activeFolder_${depth}`);

    open = getContext<string>("currentPage").includes(`${navItem.path}`);
  // HANDLERs
  /*$: {
        if ($activeFolder !== null && ($activeFolder === navItem.href)) open = true;
        if ($activeFolder !== null && ($activeFolder !== navItem.href)) open = false;
    }*/
  /*$: {
        if (getContext(`activeFolder_${depth}`) !== navItem.href) open = false;
    }*/

  function onToggled() {
    //if (open) setContext(`activeFolder_${depth}`, navItem.href);
    if (open) $activeFolder = navItem.path; //activeFolder.set(navItem.href);
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
  style="--depth: calc({depth -1} * var(--spacing-6)  * 0.9*0.9);"
  on:click={onToggled}> <!-- TODO(@maxu): quick hack with class:firstSub, fix!-->
  <summary>
    <span>
      <span class="group-icon"
        ><slot name="icon"
          ><IconChevronDown size={24} strokeWidth={1.5} style="currentColor" /></slot
        ></span>
      <span class="title">{navItem.title}</span>
      <hr />
    </span>
  </summary>
  <ul>
    {#if navItem.subItems}
      {#each navItem.subItems as subItem}
        <NavItem navItem={subItem} depth={depth + 1} />
      {/each}
    {/if}
  </ul>
</details>

<style lang="scss">
  details {
    width: 100%;

    summary {
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding-inline: var(--spacing-6);
      color: hsl(var(--color-gray-30));

      & > span {
        width: 100%;
        padding-left: var(--depth);
        padding-block: var(--spacing-1);
        display: flex;
        align-items: center;

        .group-icon {
          flex-grow: 0;
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
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
  details:not(.nested) > summary > span {
    color: hsl(var(--color-gray-5));
  }
  details.nested > summary > span {
    border-left: 2px solid hsl(var(--color-gray-90));
  }
  details.nested.firstSub > summary > span {
    border-left: 2px solid transparent;
  }

  // Icon state
  details > summary .group-icon {
    transform: translateX(-0.4rem) translateY(0rem);
  }
  details.animated > summary .group-icon {
    transform: translateX(-0.35rem) translateY(-0.25rem) rotate(-90deg);
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
    background: hsl(var(--color-gray-95));
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
</style>
