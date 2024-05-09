import { html } from '../../utils/html'
import Darkmode from '../darkBtn'
import LIST_NAV from 'configs/data/home/nav'
import getIconHtml from 'assets/script/server/iconHtml'

const HTML_LIST_NAV = LIST_NAV.map(({ title, link,icon }) => {
  const slug = link != undefined ? link : title
  return html`
    <li class="m-auto align-middle">
      <a
        href="#${slug}"
        class="tooltip md:tooltip-left m-1 capitalize font-Rokkit font-bold"
        data-tip="${title}">
        ${getIconHtml(icon,title)}
      </a>
    </li>
  `
})
export default html`
  <nav
    class="fixed bottom-0 left-0 md:left-auto
      md:right-0 z-50 w-full md:w-fit md:h-full
      flex justify-center items-center"
    data-aos="zoom-in">
    <div class="w-fit h-fit m-auto ">
      <ul
        class="menu menu-horizontal md:menu-vertical bg-base-200 rounded-box m-auto align-middle">
        ${HTML_LIST_NAV}
      </ul>
      ${Darkmode}
    </div>
  </nav>
`