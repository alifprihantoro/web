import { html } from '../../utils/html'
import DarkComponent from './'
import Script from 'assets/script/client/icons?url'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/darkBtn',
  tags: ['autodocs'],
  render: () => {
    return html`
      <div class="bg-base-100">
        ${DarkComponent}
        <script src="${Script}"></script>
      </div>
    `
  },
}
export const DarkBtn = {}