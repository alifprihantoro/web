import LIST_NVIM from 'configs/data/home/contents/listNvim'
import LIST_WEB from 'configs/data/home/contents/listWeb'
import { html } from '../../utils/html'
import getIconHtml from 'assets/script/dev/iconHtml'

const ICONS = {
  web: getIconHtml('/icons/list/web.svg', 'web'),
  repo: getIconHtml('/icons/list/repo.svg', 'repo'),
}

export const HTML_LIST_WEB = LIST_WEB.map(({ title, web, repo }) => {
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

export const HTML_LIST_NVIM = LIST_NVIM.map((name) => {
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
