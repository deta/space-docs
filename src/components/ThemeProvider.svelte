<script lang="ts">
  import {themeStore} from '../utils/theme'

  const { theme } = themeStore

  // add theme class to the documentElement but remove old one
  $: if ($theme === 'dark') {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
  $: document.documentElement.style.setProperty(
    'color-scheme',
    $theme as string
  )
</script>

<slot />