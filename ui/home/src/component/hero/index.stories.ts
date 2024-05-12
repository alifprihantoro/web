import { args } from '.'
import home, { Targs } from './component'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Hero',
  args,
  render: (args: Targs) => {
    return `<div class="bg-base-100">${home(args)}</div>`
  },
}
export const Hero = {}
