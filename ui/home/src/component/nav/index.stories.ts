import home from './'
import script from 'assets/script/client/main?url'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Nav',
  render: () => {
    return `<div class="bg-base-100">
      ${home}
      <script src="${script}"></script>
    </div>`
  },
}
export const Nav = {}
