import fs from 'fs/promises'
import path from 'path'

export async function generateIndexPages() {
  const buildDir = path.resolve('./src/content/docs/build')
  const folders = await fs.readdir(buildDir)
  const indexPages = []

  console.log(folders)

  for (const folder of folders) {
    const folderPath = path.join(buildDir, folder)
    const folderStats = await fs.stat(folderPath)

    if (folderStats.isDirectory()) {
      const files = await fs.readdir(folderPath)
      const pages = files
        .filter((file) => file.endsWith('.html'))
        .map((file) => ({
          path: path.join('/', folder, file).replace(/\.html$/, ''),
          title: file.replace(/\.html$/, ''),
        }))
      const content = `<ul>${pages
        .map(({ path, title }) => `<li><a href="${path}">${title}</a></li>`)
        .join('')}</ul>`

      indexPages.push({
        path: `${folder}.html`,
        content: content,
      })
    }
  }

  console.log('test')

  return indexPages
}