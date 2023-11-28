import home from './home'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Pages/Home',
  tags: ['autodocs'],
  render: () => {
    return home()
  },

}
export const Home = {}