import { html } from '../../utils/html'

export const LIST_CREDENTIAL = [
  {
    description: 'Front End Development Libraries dari freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/alifprihantoro/front-end-development-libraries',
  },
  {
    description: 'JavaScript Algorithms and Data Structures dari freeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/alifprihantoro/javascript-algorithms-and-data-structures',
  },
  {
    description:
      'Belajar Membuat Aplikasi Back-End untuk Pemula dari Dicoding Indonesia ',
    credential: 'RVZKKMGNEZD5',
    link: 'https://www.dicoding.com/certificates/RVZKKMGNEZD5',
  },
  {
    description:
      'Menjadi Front-End Web Developer Expert dari Dicoding Indonesia ',
    credential: 'NVP7958ERZR0',
    link: 'https://www.dicoding.com/certificates/NVP7958ERZR0',
  },
  {
    description:
      'Belajar Dasar Pemrograman JavaScript dari Dicoding Indonesia ',
    credential: 'MRZMD288NZYQ',
    link: 'https://www.dicoding.com/certificates/MRZMD288NZYQ',
  },
  {
    description:
      'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) dari Dicoding Indonesia ',
    credential: 'N9ZO47Y2DZG5',
    link: 'https://www.dicoding.com/certificates/N9ZO47Y2DZG5',
  },
  {
    description:
      'Belajar Fundamental Front-End Web Development dari Dicoding Indonesia ',
    credential: 'EYX424K76ZDL',
    link: 'https://www.dicoding.com/certificates/EYX424K76ZDL',
  },
  {
    description: 'Belajar Dasar Pemrograman Web dari Dicoding Indonesia ',
    credential: '6RPND1DWRZ2M',
    link: 'https://www.dicoding.com/certificates/6RPND1DWRZ2M',
  },
  {
    description:
      'Belajar Membuat Front-End Web untuk Pemula dari Dicoding Indonesia ',
    credential: '4EXG5Q5NEXRL',
    link: 'https://www.dicoding.com/certificates/4EXG5Q5NEXRL',
  },
]

export declare type TLIST_CREDENTIAL = typeof LIST_CREDENTIAL

export const HTML_LIST_CREDENTIAL = (ListCredential: TLIST_CREDENTIAL) => {
  return ListCredential.map(({ link, description, credential }) => {
    credential = credential ? `(${credential})` : ''
    return html`
    <div
      class="bg-base-100 shadow-center shadow-base-300 max-h-72 my-6 rounded-md">
      <div class="card-body">
        <a href="${link}" target="_blank">
          <h3 class="card-title font-Lato capitalize">${description}</h3>
          ${credential}
        </a>
      </div>
    </div>
  `
  }).join('')
}

export default HTML_LIST_CREDENTIAL(LIST_CREDENTIAL)