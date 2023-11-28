import { html } from '../../utils/html'
import { LIST_NAV } from '../nav'
import Title from '../title'
import HTML_LIST_CREDENTIAL from './list'

const { icon, title } = LIST_NAV[4]
const TITLE = Title({ icon, title })
export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-up">
    <fieldset class="border-2 border-base-content p-3 rounded">
      <legend>${TITLE}</legend>
      ${HTML_LIST_CREDENTIAL}
    </fieldset>
  </div>
`