import { html } from '../../utils/html'
import { LIST_NAV } from '../nav'

export default function Title(index: number, content?: string | string[]) {
  const { icon, title, link } = LIST_NAV[index]
  return html`
    <fieldset class="border-2 border-base-content p-3 rounded">
      <legend>
        <h2
          class="uppercase font-bold font-Lato text-xl flex btn rounded-md btn-ghost"
          id="${link || title.replace(/\s/gi, '-')}">
          ${icon} ${title}
        </h2>
      </legend>
      ${content || ''}
    </fieldset>
  `
}