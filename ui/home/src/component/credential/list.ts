import { html } from '../../utils/html'
import { LIST_CREDENTIAL } from 'configs/data/home/contents/credential'

export declare type TLIST_CREDENTIAL = typeof LIST_CREDENTIAL

export const HTML_LIST_CREDENTIAL = (ListCredential: TLIST_CREDENTIAL) => {
  return ListCredential.map(({ link, description, credential }) => {
    credential = credential ? `(${credential})` : ''
    return html`
    <div
      class="bg-base-100 shadow-center shadow-base-300 max-h-72 my-6 rounded-md">
      <div class="card-body">
        <a href="${link}" target="_blank">
          <h3 class="card-title font-Lato capitalize">${description}</h3>
          ${credential}
        </a>
      </div>
    </div>
  `
  }).join('')
}

export default HTML_LIST_CREDENTIAL(LIST_CREDENTIAL)