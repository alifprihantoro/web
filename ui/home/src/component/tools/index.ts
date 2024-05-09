import { html } from '../../utils/html'
import Title from '../title'
import LIST_TOOLS from './list'
import getIcon from 'assets/script/server/iconHtml'

const HTML_LIST_SKILL = LIST_TOOLS.map(([name,icon]) => {
  return html`
    <div
      class="tooltip m-1 capitalize font-Rokkit font-bold"
      data-tip="${name}">
      <button class="btn btn-sm px-2 rounded-lg">${getIcon(icon,name)}</button>
    </div>
  `
})

const TITLE = Title(2, HTML_LIST_SKILL)

export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto" data-aos="fade-left">
    ${TITLE}
  </div>
`