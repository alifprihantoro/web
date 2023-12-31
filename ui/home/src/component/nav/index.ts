import { html } from '../../utils/html'
import Darkmode from '../darkBtn'

export const LIST_NAV = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1z"/></svg>',
    title: 'home',
    link: '',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/></svg>',
    title: 'contact & link',
    link: 'contact',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 16 16"><path fill="currentColor" d="M4.75 2A2.75 2.75 0 0 0 2 4.75v6a2.75 2.75 0 0 0 2.75 2.75h4.027a1.788 1.788 0 0 1 .226-1.128L9.218 12H4.75c-.69 0-1.25-.56-1.25-1.25V5H12v1.194c.472-.187.99-.25 1.5-.174V4.75A2.75 2.75 0 0 0 10.75 2h-6Zm5.521 7.686a2.9 2.9 0 0 1 .228-2.144L9.104 6.146a.5.5 0 1 0-.707.708L10.043 8.5l-1.646 1.646a.5.5 0 0 0 .707.708l1.167-1.168Zm-3.168-3.54a.5.5 0 0 1 0 .708L5.457 8.5l1.646 1.646a.5.5 0 0 1-.707.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .707 0Zm6.32.875l-.9 1.56a.637.637 0 1 0 1.103.636l.9-1.559a1.91 1.91 0 0 1-1.624 3.144l-1.654 2.865a.796.796 0 1 1-1.379-.795l1.651-2.86a1.91 1.91 0 0 1 1.903-2.99Z"/></svg>',
    title: 'tools & tech',
    link: 'tools',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 17 16"><path fill="currentColor" d="M4.75 2A2.75 2.75 0 0 0 2 4.75v6a2.75 2.75 0 0 0 2.75 2.75h2.422l.177-.709c.069-.275.168-.54.295-.791H4.75c-.69 0-1.25-.56-1.25-1.25V5H12v2.379l.63-.631c.257-.256.553-.447.87-.571V4.75A2.75 2.75 0 0 0 10.75 2h-6Zm6.238 6.39a.5.5 0 0 0-.134-.243l-2-2a.5.5 0 0 0-.707.708L9.793 8.5l-1.646 1.646a.5.5 0 0 0 .243.842l2.598-2.598ZM6.853 6.856a.5.5 0 0 0-.707-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 1 0 .707-.708L5.207 8.501l1.646-1.646Zm8.692.6a1.56 1.56 0 0 0-2.207 0l-4.289 4.288a2.777 2.777 0 0 0-.73 1.29l-.303 1.212a.61.61 0 0 0 .739.739l1.211-.303a2.778 2.778 0 0 0 1.29-.73l4.289-4.289a1.56 1.56 0 0 0 0-2.207Z"/></svg>',
    title: 'project',
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M19 11a3 3 0 0 1 2 5.236v4.955a.5.5 0 0 1-.724.447L19 21l-1.276.638a.5.5 0 0 1-.724-.447v-4.955A3 3 0 0 1 19 11Zm1-7a2 2 0 0 1 2 2v4a5 5 0 0 0-7 7v3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16ZM8 13H6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2Zm4-4H6a1 1 0 0 0-.117 1.993L6 11h6a1 1 0 0 0 .117-1.993L12 9Z"/></g></svg>',
    title: 'credential',
  },
]
    console.log(LIST_NAV)
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