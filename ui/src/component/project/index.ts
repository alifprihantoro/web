import { html } from '../../utils/html'
import { LIST_NAV } from '../nav'
import Title from '../title'
import LIST_NVIM from './listNvim'
import LIST_WEB from './listWeb'

const ICONS = {
  repo: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"> <path fill="currentColor" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7a.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" /> </svg>',
  web: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"> <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13ZM.5 7h13" /> <path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7v0Z" /> </g> </svg>',
}

const HTML_LIST_WEB = LIST_WEB.map(({ title, web, repo }) => {
  web = web
    ? html`
        <a href="${web}" target="_blank" class="btn btn-secondary btn-xs">
          ${ICONS.web}
        </a>
      `
    : ''

  return html`
    <div
      class="bg-base-100 shadow-center shadow-base-300 max-h-72 my-6 rounded-md">
      <div class="card-body">
        <a href="${repo}" target="_blank">
          <h3 class="card-title font-Lato capitalize">${title}</h3></a
        >
        <div class="card-actions justify-start">
          <div class="tooltip" data-tip="Visit Repo">
            <a href="${repo}" target="_blank" class="btn btn-accent btn-xs">
              ${ICONS.repo}
            </a>
          </div>
          <div class="tooltip" data-tip="Preview Web">${web}</div>
        </div>
      </div>
    </div>
  `
})

const HTML_LIST_NVIM = LIST_NVIM.map((name) => {
  const LINK = `https://github.com/muryp/${name}`
  return html`
    <a href="${LINK}" target="_blank">
      <div
        class="bg-base-100 shadow-center shadow-base-300 max-h-72 my-6 rounded-md">
        <div class="card-body">
          <h3 class="card-title font-Lato">${name}</h3>
          <div class="card-actions justify-start">
            <div class="tooltip" data-tip="Visit Repo">
              <a href="${LINK}" target="_blank" class="btn btn-accent btn-xs">
                ${ICONS.repo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  `
})

const TITLE = Title({ icon: LIST_NAV[3].icon, title: 'project' })
export default html`
  <div class="md:w-[calc(50%-1rem)] m-auto mt-3 md:mt-0" data-aos="fade-up">
    <fieldset class="border-t-2 border-base-content">
      <legend>${TITLE}</legend>
    </fieldset>
    <div role="tablist" class="tabs tabs-bordered">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab font-bold font-Lato"
        aria-label="Web"
        checked />
      <div
        role="tabpanel"
        class="tab-content rounded-box p-4 md:p-9 border-base-200">
        ${HTML_LIST_WEB}
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab w-[120px] font-bold font-Lato"
        aria-label="Nvim Plug" />
      <div role="tabpanel" class="tab-content rounded-box p-4 border-base-200">
        ${HTML_LIST_NVIM}
      </div>
    </div>
  </div>
`