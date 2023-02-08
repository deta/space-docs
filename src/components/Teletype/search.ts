/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Hits, MeiliSearch } from "meilisearch";
import type { Action } from "@deta/teletype";
import Page from "@/components/Teletype/Icons/Page.svelte";
import DocSearch from "@/components/Teletype/Icons/DocSearch.svelte";

const convertSearchToActions = (hits: Hits<Record<string, any>>): Action[] => {
  const actions: Action[] = [];

  hits.forEach((hit: any) => {
    const section = hit.hierarchy_lvl0 ? hit.hierarchy_lvl0 : "Space Docs";
    const page = hit.hierarchy_lvl1 ? hit.hierarchy_lvl1 : "Documentation";
    const heading = hit.hierarchy_lvl3 ? hit.hierarchy_lvl3 : hit.hierarchy_lvl2 ? hit.hierarchy_lvl2 : "";

    // Remove duplicate search results by searching for actions that are indistinguishable (have the same name and breadcrumb)
    const actionId = `${page}-${heading}`;
    const existingMatch = actions.find((action) => action.id === actionId);
    if (!existingMatch) {
      actions.push({
        id: actionId,
        // Show the heading title and fallback to the page title if it doesn't exist
        name: heading || page,
        icon: Page,
        nestedSearch: false,
        // If we don't have a heading title or it matches the page title we show the section title instead
        breadcrumb: !heading || heading === page ? section : page,
        handler: () => {
          window.location.href = hit.url.replace(/(.*:[0-9]+\/)/gm, `${window.location.origin}/`);
        },
      });
    }
  });

  return actions;
};

// Might become useful later, atm teletype can't render these child actions
// const convertSearchToSections = (hits: Hits<Record<string, any>>): Action[] => {
//   const sections: string[] = []

//   hits.forEach((hit: any) => {
//     const section = hit.hierarchy_lvl0 as string

//     if (!sections.find(item => item === section)) {
//       sections.push(section)
//     }
//   })

//   const actions = sections.map(section => {
//     const matches = hits.filter(hit => hit.hierarchy_lvl0 === section)
//     return {
//       id: section,
//       name: section,
//       nestedSearch: false,
//       childActions: convertSearchToActions(matches),
//     }
//   }) as Action[]

//   return actions
// }

const convertRootSearchToActions = (hits: Hits<Record<string, any>>): Action[] => {
  const matches = hits.filter((hit) => !hit.hierarchy_lvl2);
  return convertSearchToActions(matches);
};

export const useSearchAction = () => {
  const searchUrl = "https://deta.space/api/v0";
  const searchClient = new MeiliSearch({
    host: searchUrl,
  });
  const docsIndex = searchClient.index("docs");

  return {
    id: "search_docs",
    name: "Search Docs",
    breadcrumb: "Search Docs",
    placeholder: "Start typing to search the docs",
    section: "Help",
    icon: DocSearch,
    inputHandler: async (inputValue: string) => {
      const search = await docsIndex.search(inputValue, {
        limit: 1000,
      });
      if (inputValue === "") {
        return convertRootSearchToActions(search.hits);
      }

      return convertSearchToActions(search.hits);
    },
  } as Action;
};
