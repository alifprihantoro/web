import Contact from '../component/contact'
import Credencial from '../component/credential'
import Footer from '../component/footer'
import Hero from '../component/hero'
import { html } from '../utils/html'
import Nav from '../component/nav'
import Project from '../component/project'
import Skill from '../component/tools'
import Script from '../script/main?url'

export default function Home() {
  return html`
    <div class="bg-base-100 w-full">
      ${Nav + Hero}
      <div class="md:flex p-2">${Skill + Contact}</div>
      <div class="md:flex p-2">
      ${Project + Credencial }
      </div>
      ${Footer}
    </div>
    <script src="${Script}"></script>
  `
}