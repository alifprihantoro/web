import { html } from '../../utils/html'
import { LIST_NAV } from '../nav'
import Title from '../title'
import LIST_TOOLS from './list'

const HTML_LIST_SKILL = LIST_TOOLS.map(({ icon, name }) => {
  return html`
    <div
      class="tooltip m-1 capitalize font-Rokkit font-bold"
      data-tip="${name}">
      <button class="btn btn-sm px-2 rounded-lg">${icon}</button>
    </div>
  `
})

const { icon, title, link } = LIST_NAV[2]
const TITLE = Title({ icon, title, id: link })

export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto" data-aos="fade-left">
    <fieldset class="border-2 border-base-content p-3 rounded">
      <legend class="flex">${TITLE}</legend>
      ${HTML_LIST_SKILL}
    </fieldset>
  </div>
`