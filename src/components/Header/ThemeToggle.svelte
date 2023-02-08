<script type="ts" context="module">
  export type Theme = 'dark' | 'light'

  /**
   * Get prefered theme
   */
  export function getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  /**
   * Change theme
   * @param theme
   */
  export function changeTheme(theme: Theme) {
    localStorage.setItem('theme', theme)

    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark')
    } else {
      document.documentElement.classList.remove('theme-dark')
    }
  }
</script>

<script type="ts">
  import { onMount } from 'svelte'
  import Sun from '@/components/Teletype/Icons/Sun.svelte'
  import Moon from '@/components/Teletype/Icons/Moon.svelte'

  let theme: Theme

  /**
   * Initialize theme
   */
  onMount(() => {
    const currentTheme = localStorage.getItem('theme')
    const darkThemePrefered = getSystemTheme() === 'dark'
    const isDark = currentTheme === 'dark' || (!currentTheme && darkThemePrefered)
    setTheme(isDark ? 'dark' : 'light')
  })

  /**
   * Toggle current theme
   */
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  /**
   * Set theme
   * @param newTheme Theme to set
   */
  function setTheme(newTheme: Theme) {
    theme = newTheme
    changeTheme(newTheme)
  }
</script>

<button class="themeToggle" on:click={toggleTheme}>
  {#if theme === 'dark'}
    <Moon />
  {:else if theme === 'light'}
    <Sun />
  {/if}
</button>

<style>
  button {
    all: unset;
  }

  button :global(svg) {
    display: block;
    user-select: none;
    -webkit-user-drag: none;
    transition: transform 0.1s ease;
  }

  button:active :global(svg) {
    transform: scale(0.75) rotate(10deg);
  }

  button :global(svg *) {
    fill: var(--theme-code-inline-text);
    stroke: var(--theme-code-inline-text);
  }

  button:hover :global(svg *) {
    fill: var(--theme-accent);
    stroke: var(--theme-accent);
  }

  .themeToggle {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: var(--theme-code-inline-bg);
  }
</style>
