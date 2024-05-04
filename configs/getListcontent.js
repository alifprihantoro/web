function content(args) {
  const Listcontent = {
    home: './ui/home/src/**/*.{astro,html,md,mdx,ts}',
    blog: './ui/blog/src/**/*.{astro,html,md,mdx,ts}',
    astro: './web/main/src/**/*.{astro,html,md,mdx,ts}',
  }
  const content = []
  if (args == 'web') {
    content.push(Listcontent.astro)
    content.push(Listcontent.home)
    content.push(Listcontent.blog)
  } else if (args == 'all') {
    for (const list in Listcontent) {
      content.push(Listcontent[list])
    }
  } else {
    content.push(Listcontent[args])
  }
  /** @type {import('tailwindcss').Config} */
  return content
}

/* eslint-disable no-undef */
module.exports = content