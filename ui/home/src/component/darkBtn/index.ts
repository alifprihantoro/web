import { html } from '../../utils/html'
// import { moon, sun } from 'assets/icons/darkBtn'
import moon from 'assets/icons/darkBtn/moon.svg?url'
import sun from 'assets/icons/darkBtn/sun.svg?url'
import getIcons from 'assets/ts/iconHtml'

export default html`
  <button
    class="btn btn-md md:h-fit md:py-6 md:w-full tooltip tooltip-left
      max-md:fixed max-md:bottom-20 max-md:right-3 z-50 max-md:rounded-full"
    data-tip="Switch Theme">
    <label class="swap swap-rotate">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" class="theme-controller" id="theme-mode" />
      <span class="swap-off fill-current w-5"> ${getIcons(sun,'DARK_BTN')} </span>
      <span class="swap-on fill-current w-5"> ${getIcons(moon,'DARK_BTN')} </span>
    </label>
  </button>
`