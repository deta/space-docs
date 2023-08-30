export const colorSchemes = ['light', 'dark']
export const MEDIA = '(prefers-color-scheme: dark)'

export const isBrowser = () => typeof window !== 'undefined'

export const getTheme = (
  key: string,
  fallback?: string
): string | undefined => {
  if (typeof window === 'undefined') return undefined
  let theme
  try {
    theme = localStorage.getItem(key) || undefined
  } catch (_) {
    // Unsupported
  }
  return theme || fallback
}

export const disableAnimation = () => {
  const css = document.createElement('style')
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  )
  document.head.appendChild(css)

  // Recompute styles
  ;(() => window.getComputedStyle(document.body))()
  // Then remove the style after 1 tick
  setTimeout(() => {
    document.head.removeChild(css)
  }, 1)
}

export const getSystemTheme = (e?: MediaQueryList): string => {
  if (!e && isBrowser()) {
    e = window.matchMedia(MEDIA)
  }

  const isDark = e?.matches
  const systemTheme = isDark ? 'dark' : 'light'
  return systemTheme
}