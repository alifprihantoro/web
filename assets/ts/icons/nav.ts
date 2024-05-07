import home from '../../icons/nav/home.svg?url'
import contact from '../../icons/nav/contact.svg?url'
import tools from '../../icons/nav/tools.svg?url'
import project from '../../icons/nav/project.svg?url'
import Credential from '../../icons/nav/credential.svg?url'
import getIcons from '../iconHtml'

export default {
  home: getIcons(home,'home'),
  contact: getIcons(contact,'contact'),
  tools: getIcons(tools,'tools'),
  project: getIcons(project,'project'),
  credential: getIcons(Credential,'credential'),
}