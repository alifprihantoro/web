import { LIST_CREDENTIAL, HTML_LIST_CREDENTIAL, TLIST_CREDENTIAL } from './list'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Credential',
  tags: ['autodocs'],
  args: {
    LIST: LIST_CREDENTIAL,
  },
  render: ({ LIST }: { LIST: TLIST_CREDENTIAL }) => {
    return HTML_LIST_CREDENTIAL(LIST)
  },

}
/**
* Make some **bold**
*/
export const Credential = {}