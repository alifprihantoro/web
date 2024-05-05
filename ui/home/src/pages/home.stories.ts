import home from './home'
import Script from 'assets/ts/main?url'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Pages/Home',
  tags: ['autodocs'],
  render: () => {
    return `${home}
<script src="${Script}"></script>
`
  },
}
export const Home = {}