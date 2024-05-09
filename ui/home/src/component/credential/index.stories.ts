import { LIST_CREDENTIAL } from 'configs/data/home/contents/credential'
import { HTML_LIST_CREDENTIAL, TLIST_CREDENTIAL } from './list'
import content from './'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Credential',
  tags: ['autodocs'],
}

export const List = {
  args: {
    LIST: LIST_CREDENTIAL,
  },
  render: ({ LIST }: { LIST: TLIST_CREDENTIAL }) => {
    return HTML_LIST_CREDENTIAL(LIST)
  },
}
export const Content = {
  render: () => {
    return content
  },
}
