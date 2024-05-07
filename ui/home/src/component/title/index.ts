import { html } from '../../utils/html'
import LIST_NAV from 'configs/data/home/nav'
import LIST_ICON from 'assets/ts/icons/nav'

export default function Title(index: number, content?: string | string[]) {
  const { title, link } = LIST_NAV[index]
  const slug = link != undefined ? link : title
  const iconName = slug === '' ? 'home' : slug
  const icon = LIST_ICON[iconName as 'home']
  return html`
    <fieldset class="border-2 border-base-content p-3 rounded">
      <legend>
        <h2
          class="uppercase font-bold font-Lato text-xl flex btn rounded-md btn-ghost"
          id="${link || title.replace(/\s/gi, '-')}">
          ${icon}${title}
        </h2>
      </legend>
      ${content || ''}
    </fieldset>
  `
}