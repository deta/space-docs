export const SITE = {
  title: 'Space Docs',
  description: 'Deta Space Developer Documentation and Guides',
  defaultLanguage: 'en_US',
}

export const docsSectionsOrder = ['Overview', 'Basics', 'Guides', 'Reference', 'Quickstart Guides', 'Other']
export const manualSectionsOrder = ['Overview', 'Features']
export const migrationSectionsOrder = ['Overview', 'Guides', 'Learn More', 'Other']

export const OPEN_GRAPH = {
  image: {
    src: '',
    alt: '',
  },
  twitter: 'detahq',
}

// This is the type of the frontmatter you put in the changelogs markdown files.
export type FrontmatterChangelog = {
  title: string
  date: string
  layout: '@changelogs'
  description?: string
}

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string
  description: string
  layout: string
  image?: { src: string; alt: string }
  dir?: 'ltr' | 'rtl'
  ogLocale?: string
  lang?: string
}

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const GITHUB_EDIT_URL = `https://github.com/deta/space-docs/tree/main/src/pages/en`

export const COMMUNITY_INVITE_URL = `https://go.deta.dev/discord`
