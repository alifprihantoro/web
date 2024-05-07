import { html } from '../../utils/html'
import Title from '../title'
import LIST_TOOLS from './list'
import LIST_ICON from 'assets/ts/icons/tools'
import getIcon from 'assets/ts/iconHtml'

const HTML_LIST_SKILL = LIST_TOOLS.map((name,key) => {
  const icon = getIcon(LIST_ICON[key],name)
  return html`
    <div
      class="tooltip m-1 capitalize font-Rokkit font-bold"
      data-tip="${name}">
      <button class="btn btn-sm px-2 rounded-lg">${icon}</button>
    </div>
  `
})

const TITLE = Title(2, HTML_LIST_SKILL)

export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto" data-aos="fade-left">
    ${TITLE}
  </div>
`