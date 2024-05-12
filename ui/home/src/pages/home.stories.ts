import home from './home'
import Script from 'assets/script/client/main?url'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Pages/Home',
  render: () => {
    return `${home}
<script src="${Script}"></script>
`
  },
}
export const Home = {}
