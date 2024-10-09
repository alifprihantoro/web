import { html } from '../../utils/html'
import LIST_NAV from 'configs/data/home/nav'
import getListIcon from 'assets/script/dev/iconHtml'

export default function Title(index: number, content?: string | string[]) {
  const { title, link,icon } = LIST_NAV[index]
  const ICON = getListIcon(icon,'')
  return html`
    <fieldset class="border-2 border-base-content p-3 rounded">
      <legend>
        <h2
          class="uppercase font-bold font-Lato text-xl flex btn rounded-md btn-ghost"
          id="${link || title.replace(/\s/gi, '-')}">
          ${ICON}${title}
        </h2>
      </legend>
      ${content || ''}
    </fieldset>
  `
}