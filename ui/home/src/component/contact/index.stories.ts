import Component from './'
import script from 'assets/script/client/icons?url'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Contacs',
  tags: ['autodocs'],
  render: () => {
    return `<div class="bg-base-100">
      ${Component}
      <script src="${script}"></script>
    </div>`
  },
}
export const Contact = {}