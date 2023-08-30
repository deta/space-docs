import { derived, get, writable } from 'svelte/store'

import { disableAnimation, getSystemTheme, isBrowser } from './helpers'

type StoredTheme = 'dark' | 'light'
type Theme = Omit<StoredTheme, 'system'>

export const provideTheme = () => {
  const storedTheme = isBrowser()
    ? (window.localStorage.getItem('theme') as StoredTheme | null)
    : null

  const defaultTheme =
    storedTheme === 'system' ? getSystemTheme() : storedTheme || 'light'

  const theme = writable<Theme>(defaultTheme)
  const themePreference = writable<StoredTheme>(storedTheme || 'system')

  const setThemeValue = (value: Theme) => {
    disableAnimation()
    theme.set(value)
  }

  let tracking = false
  const watchSystemThemeChange = (callback: (e: Theme) => void) => {
    const handler = (e: MediaQueryListEvent) => {
      // Only run if theme is set to system
      if (get(themePreference) !== 'system') return

      const colorScheme = e.matches ? 'dark' : 'light'
      callback(colorScheme)
    }

    window.matchMedia('(prefers-color-scheme: dark)').onchange = handler
    tracking = true
  }

  themePreference.subscribe(value => {
    if (isBrowser()) {
      window.localStorage.setItem('theme', value)

      if (value === 'system' && !tracking) {
        watchSystemThemeChange(setThemeValue)
      }
    }
  })

  const setTheme = (value: string) => {
    if (value === 'dark' || value === 'light') {
      setThemeValue(value)
      themePreference.set(value)
    } else if (value === 'system') {
      setThemeValue(getSystemTheme())
      themePreference.set('system')
    } else {
      console.error(`Unknown theme value: ${value}`)
    }
  }

  return {
    theme: derived(theme, value => value),
    themePreference: derived(themePreference, value => value),
    setTheme,
  }
}

export const themeStore = provideTheme()

export const theme = themeStore.theme
export const themePreference = themeStore.themePreference
export const setTheme = themeStore.setTheme