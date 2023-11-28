import { html } from '../../utils/html'
import { LIST_NAV } from '../nav'
import Title from '../title'
import HTML_LIST_CONTACT from './listContact'

export const Component = ({ index }: { index: number }) => {
  const { icon, title, link } = LIST_NAV[index]
  const TITLE = Title({ icon, title, id: link })

  return html`
  <div
    class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0"
    data-aos="fade-right">
    <fieldset class="border-2 border-base-content p-3 rounded">
      <legend>${TITLE}</legend>
      ${HTML_LIST_CONTACT}
    </fieldset>
  </div>
`
}

export default Component({ index: 1 })