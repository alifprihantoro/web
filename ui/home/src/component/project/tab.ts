import { html } from '../../utils/html'

export default (tittle: string, content: string | string[]) => html`
  <input
    type="radio"
    name="tabs_project"
    role="tab"
    class="tab font-bold font-Lato uppercase"
    aria-label="${tittle}"
    checked />
  <div
    role="tabpanel"
    class="tab-content rounded-box p-4 md:p-9 border-base-200">
    ${content}
  </div>
`