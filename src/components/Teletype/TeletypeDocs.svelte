<script lang="ts">
    import { useTeletype } from "@deta/teletype/src/index"
    import { get } from "svelte/store"
    import { MeiliSearch } from "meilisearch"

    import type { Action, } from "@deta/teletype/src/index"
    import Page from "@/components/Teletype/Icons/Page.svelte"
    
    export let actions: Action[]

    const searchUrl = "https://deta.space/api/v0"
    const searchClient = new MeiliSearch({
        host: searchUrl,
    })
    const docsIndex = searchClient.index("docs")
    
    const teletype = useTeletype()
    const inputValue = teletype.inputValue

    let debounceTimer: any
    const debounceLatency = 250

    const convertSearchToActions = (search: any): Action[] => {
        const actions : Action[] = []

        search.hits.forEach((hit: any) => {
            const section = hit.hierarchy_lvl0 ? 
                hit.hierarchy_lvl0 : "Space Docs"
            const page = hit.hierarchy_lvl1 ? 
                hit.hierarchy_lvl1 : "Documentation"
            const heading = hit.hierarchy_lvl3 ? 
                hit.hierarchy_lvl3 : (hit.hierarchy_lvl2 ? hit.hierarchy_lvl2 : "")

            // Remove duplicate search results by searching for actions that are indistinguishable (have the same name and breadcrumb) 
            const actionId = `${page}-${heading}`
            const existingMatch = actions.find(action => action.id === actionId)
            if (!existingMatch) {
                actions.push({
                    id: `${page}-${heading}`,
                    // Show the heading title and fallback to the page title if it doesn't exist
                    name: heading || page,
                    section: section,
                    icon: Page,
                    nestedSearch: false,
                    // If we don't have a heading title or it matches the page title we show the section title instead
                    breadcrumb: !heading || heading === page ? section : page,
                    handler: () => {
                        window.location.href = hit.url.replace(/(.*:[0-9]+\/)/gm, `${window.location.origin}/`)
                    },
                })
            }
        })

        return actions
    }

    const findLocalActions = (search: string, actions: Action[]) => {
        return actions.filter(action => {
            return action.name.toLowerCase().includes(search.toLowerCase()) && action.id !== 'search_docs'
        })
    }

    const handleSearch = async (searchTerm: any) => {
        try {
            const current = get(teletype.currentAction)
            if (current) {
                teletype.setActions(actions)
                teletype.options!.localSearch = true
                teletype.currentAction.set(current)
                return
            }

            if (searchTerm != "" ) {
                // Disable built-in searching and use external search engine
                teletype.options!.localSearch = false

                const search = await docsIndex.search(searchTerm, {
                    limit: 1000,
                })

                const remoteActions = convertSearchToActions(search)
                const localActions = findLocalActions(searchTerm, actions)

                teletype.actions.set([...localActions, ...remoteActions])
            } else {
                // Use the static actions and built-in searching
                teletype.options!.localSearch = true
                teletype.setActions(actions)
            }
        } catch (e) {
            teletype.setActions([])
        }
    }

    const debounce = (searchTerm: string) => {
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => {
            handleSearch(searchTerm)
        }, debounceLatency)
    }

    inputValue.subscribe((searchTerm) => debounce(searchTerm))
</script>
