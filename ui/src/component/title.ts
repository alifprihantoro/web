import { html } from '../utils/html'

interface args {
  icon: string
  title: string
  id?: string
}
export default function Title({ icon, title, id }: args) {
  return html`
    <h2 class="uppercase font-bold font-Lato text-xl flex btn rounded-md btn-ghost" id="${id || title}">
      ${icon}
      ${title}
    </h2>
  `
}