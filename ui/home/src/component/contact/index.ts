import { html } from '../../utils/html'
import Title from '../title'
import HTML_LIST_CONTACT from './listContact'

export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-right">
    ${Title(1, HTML_LIST_CONTACT)}
  </div>
`