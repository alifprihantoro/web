import { html } from '../../utils/html'
import Title from '../title'
import { HTML_LIST_NVIM, HTML_LIST_WEB } from './list'
import Tab from './tab'

const content = html`
  <div role="tablist" class="tabs tabs-bordered">
    ${Tab('nvim_plug', HTML_LIST_NVIM)} ${Tab('web', HTML_LIST_WEB)}
  </div>
`

export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-up">
    ${Title(3, content)}
  </div>
`
