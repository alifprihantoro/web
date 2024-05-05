import { html } from '../../utils/html'
import Title from '../title'
import LIST_CONTACT from 'configs/data/home/listContact'

const HTML_LIST_CONTACT = LIST_CONTACT.map(({ icon, name }) => {
  return html`
    <div
      class="tooltip before:-translate-x-3 my-1 capitalize font-Rokkit font-bold"
      data-tip="${name}">
      <button class="btn btn-sm md:btn-md rounded-lg">${icon}</button>
    </div>
  `
})

export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-right">
    ${Title(1, HTML_LIST_CONTACT)}
  </div>
`
