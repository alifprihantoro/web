import { html } from '../../utils/html'
import Darkmode from '../darkBtn'
import LIST_NAV from 'configs/data/home/nav'

const HTML_LIST_NAV = LIST_NAV.map(({ icon, title, link }) => {
  return html`
    <li class="m-auto align-middle">
      <a
        href="#${link != undefined ? link : title}"
        class="tooltip md:tooltip-left m-1 capitalize font-Rokkit font-bold"
        data-tip="${title}">
        ${icon}
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