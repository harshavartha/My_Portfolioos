// Downloads your images and PDFs from the old live site into /public.
// Run once with:  npm run fetch-assets   (needs Node 18+)
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

const SITE = 'https://harshavarathanportfolio.netlify.app'

const files = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => `/images/image-${n}.jpg`),
  '/resume.pdf',
  '/MEBC_Certificate.pdf',
]

for (const path of files) {
  const out = `public${path}`
  try {
    const res = await fetch(SITE + path)
    const type = res.headers.get('content-type') || ''
    // Netlify serves index.html for missing files, so skip HTML responses
    if (!res.ok || type.includes('text/html')) {
      console.log(`skipped  ${path} (not found on live site)`)
      continue
    }
    await mkdir(dirname(out), { recursive: true })
    await writeFile(out, Buffer.from(await res.arrayBuffer()))
    console.log(`saved    ${out}`)
  } catch (err) {
    console.log(`failed   ${path}: ${err.message}`)
  }
}
