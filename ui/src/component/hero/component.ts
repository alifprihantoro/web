import { html } from '../../utils/html'

export interface Targs { IMG_URL: string, TITLE: string, DESCRIPTION: string }
const Component = ({ IMG_URL, TITLE, DESCRIPTION }: Targs) => {
  return html`
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col sm:flex-row-reverse">
        <div class="avatar online" data-aos="fade-left">
          <div class="w-36 rounded-full">
            <img
              src="${IMG_URL}"
              alt="profile" />
          </div>
        </div>
        <div data-aos="fade-right">
          <h1 class="text-5xl font-bold">${TITLE}</h1>
          <p class="py-6">
            ${DESCRIPTION}
          </p>
          <button class="btn btn-primary">Hired Me!</button>
        </div>
      </div>
    </div>
  `
}

export default Component