import { html } from './html'

export default function storiesWrap(Slot: string, addClass?:string) {
  return html`<div class="bg-base-100 ${addClass || ''}">${Slot}</div>`
}