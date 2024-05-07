import { html } from '../../utils/html'
import Title from '../title'
import LIST_CONTACT from 'configs/data/home/listContact'
import listSosmed from 'assets/ts/icons/sosmed'

const HTML_LIST_CONTACT = () => {
  const contentList = []
  for (const key in LIST_CONTACT) {
    const listName = key as 'email'
    const username = LIST_CONTACT[listName]
    const icon = listSosmed[listName]
    contentList.push(html`
      <div
        class="tooltip before:-translate-x-3 my-1 capitalize font-Rokkit font-bold"
        data-tip="${username}">
        <button class="btn btn-sm md:btn-md rounded-lg">${icon}</button>
      </div>
    `)
  }
  return contentList.join('')
}
export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-right">
    ${Title(1, HTML_LIST_CONTACT())}
  </div>
`