import { Component } from './'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  args: {
    index: 1,
  },
  argTypes: {
    index: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
  },
  render: (args: { index: number }) => {
    return `<div class="bg-base-100">${Component(args)}</div>`
  },

}
export const Contact = {}