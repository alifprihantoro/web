import { html } from '../../utils/html'
import Title from '../title'
import LIST_CONTACT from 'configs/data/home/listContact'
import getIcon from 'assets/script/server/iconHtml'

const HTML_LIST_CONTACT = () => {
  const contentList = LIST_CONTACT.map(([name, username, icon]) => {
    return html`
      <div
        class="tooltip before:-translate-x-3 my-1 capitalize font-Rokkit font-bold"
        data-tip="${username}">
        <button class="btn btn-sm md:btn-md rounded-lg">
          ${getIcon(icon, name)}
        </button>
      </div>
    `
  })
  return contentList.join('')
}
export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-right">
    ${Title(1, HTML_LIST_CONTACT())}
  </div>
`