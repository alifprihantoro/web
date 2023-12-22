import Component from './component'

const IMG_URL = 'https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
const TITLE = 'ALIEF PRIHANTORO'
const DESCRIPTION = ` Hello, I'm a web developer. my specific focus is development, tools
and performance. I like simple web. I have some plugins on neovim.`

export const args = { IMG_URL, TITLE, DESCRIPTION }

export default Component({ IMG_URL, TITLE, DESCRIPTION })