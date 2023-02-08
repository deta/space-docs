import type { MarkdownInstance } from 'astro'
import HTMLParser from 'node-html-parser'
import DateFns from 'date-fns'

// Date format (Example 09 Sep 2022)
// Reference: https://date-fns.org/v2.29.3/docs/parse
export const dateFormat = 'dd LLL yyyy'

export function extractDescription(
  changelog: MarkdownInstance<Record<string, any>>
): string {
  const root = HTMLParser.parse(changelog.compiledContent())
  const firstParagraph = root.querySelector('p')?.innerText
  if (firstParagraph) return firstParagraph
  return ''
}

export function formatDate(date: string) {
  return DateFns.format(
    DateFns.parse(date, dateFormat, new Date()),
    'LLLL d, yyyy'
  )
}
