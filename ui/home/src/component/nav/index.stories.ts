import home from './'
import script from 'assets/ts/client/main?url'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Nav',
  tags: ['autodocs'],
  render: () => {
    return `<div class="bg-base-100">
      ${home}
      <script src="${script}"></script>
    </div>`
  },

}
export const Nav = {}