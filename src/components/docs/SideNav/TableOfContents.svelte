<script lang="ts">
    import type { MarkdownHeading } from "astro";

    // PROPS
    export let  headings: MarkdownHeading[],
                maxDepth: number = 2;

    const FADE_OUT_DELAY = "500ms";

</script>


<nav class="toc" aria-labelledby="grid-right" style="--fade-delay: {FADE_OUT_DELAY};">
	<ul>
        {#if headings?.length > 0}
        {#each headings as heading, i}
        {#if heading.depth <= maxDepth + 1}
        <li class:active={i === 0} style="--depth: {heading.depth -2};">
            <a href="#{heading.slug}">{heading.text}</a>
        </li>
        {/if}
        {/each}
        {/if}
		<!--{headings?.length > 0 && <TableOfContents headings={headings} frontmatter={frontmatter} client:load/>}-->
    </ul>
</nav>

<style lang="scss">
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            display: flex;
            flex-direction: column;

            a {
                color: inherit;
                text-decoration: none;
            }
        }
    }

    :global(.toc-trigger):hover .toc {

        li a {
            opacity: 100;
            transition: opacity ease-in-out 400ms 0s;
        }
    }

    .toc {
        font-size: 0.875rem;
        position: sticky;
        top: 5.5rem;
        //max-width: 35ch;

        li {
            a {
                overflow: hidden;
                transition: opacity ease-in-out 400ms 0s;
            }

        }

        /*&:hover {
            li a {
                width: auto;
                opacity: 100;
                transition: opacity ease-in-out 200ms 0s;
            }
        }*/

        li {
            border-left: 2px hsl(var(--color-gray-90)) solid;
            padding-left: var(--spacing-4);

            &.active {
                border-color: hsl(var(--color-gray-5));
            }

            a {
                width: 100%;
                box-decoration-break: clone;
                padding-left: calc(var(--depth) * var(--spacing-4));
                padding-block: calc(var(--spacing-1) / 2);

                opacity: 0;
                transition: opacity ease-in-out 200ms var(--fade-delay);
                //animation: 1s ease-in-out 2s 1 normal forwards  paused loadFadeOut;
                //animation: loadFadeOut 1s;
                //animation-fill-mode: forwards;
            }
        }
    }

    @keyframes loadFadeOut {
        0% { opacity: 1;}
        99% { opacity: 0.01;}
        100% { opacity: 0;}
    }

</style>