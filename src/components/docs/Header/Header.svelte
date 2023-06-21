<script lang="ts">
  import AstroLogo from "@/components/core/AstroLogo.svelte";
  import IconButton from "@/components/core/Button/IconButton.svelte";
  import IconMenu2 from "@/components/core/Icon/IconMenu2.svelte";
  import { sideNavOpen, toggleSideNav } from "../SideNav/SideNav.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import CodeLanguageSwitcher from "./CodeLanguageSwitcher.svelte";
  import MobileTableOfContents from "../Article/TableOfContents/MobileTableOfContents.svelte";
  import type { docsSchema } from "@/content/config";
  import type { z } from "astro/zod";
  import type { MarkdownHeading } from "astro";
  import Breadcrumbs from "../Article/Breadcrumbs.svelte";

  export let frontmatter: z.infer<typeof docsSchema>;
  export let headings: MarkdownHeading[];
  export let currentPage: string;
  import OpenCanvasButton from "./OpenCanvasButton.svelte";
  import IconX from "@/components/core/Icon/IconX.svelte";
</script>

<header>
    <div>
        <ul>
            <li class="only-desktop">
                <a href="/docs" class="docs-logo">
                    <AstroLogo size={28} />
                    <span>Space Docs</span>
                </a>
            </li>
            <li class="only-mobile" style="margin-right: -0.5rem;">
                <IconButton on:click={toggleSideNav}>
                    {#if $sideNavOpen}
                        <IconX size={24} strokeWidth={2} />
                    {:else}
                        <IconMenu2 size={24} strokeWidth={2} />
                    {/if}
                </IconButton>
            </li>
        </ul>
    </div>

    <div class="only-mobile">
        <Breadcrumbs currentPage={currentPage} />
    </div>

    <div>
        <ul>
            <li class="only-desktop">
                <OpenCanvasButton />
            </li>

            <li class="only-desktop" style="margin-right: -0.5rem;">
                <ThemeToggle />
            </li>

            <li class="only-mobile">
                <MobileTableOfContents pageTitle={frontmatter ? frontmatter.title : 'Title'} {headings} collapsable={true} maxDepth={frontmatter && frontmatter.tocDepth || 2}/>
            </li>
        </ul>
    </div>
</header>

<style lang="scss">
    // UTILS

    header {
        /*grid-column: 1 / -1;
        grid-row: 1;*/

        position: fixed;
        z-index: 15;
        top: 0;
        left: 0;
        right: 0;
        height: var(--header-height);

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-inline: var(--spacing-6);

        background: rgba(60,60,60,0.4);
        background: var(--theme-bg);

        ul {
            display: flex;
            align-items: center;
            gap: var(--spacing-6);
        }

        > div:first-child {

            a.docs-logo {
                display: flex;
                align-items: center;
                gap: var(--spacing-3);

                > span {
                    display: none;
                    flex-shrink: 0;
                    font-weight:600;
                    font-size:1.25em;
                }
            }
        }

        > div:last-child {
            // foo
        }
    }

    @media screen and (min-width: 768px) {
        header {
            top: 0;

            > div:first-child {
                a.docs-logo {
                    > span {
                        display: block;
                    }
                }
            }
        }
    }

    .docs-logo {
        color: var(--theme-color);
    }
</style>
