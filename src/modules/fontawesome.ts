import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { UserModule } from '~/types'

library.add(faFacebook, faDiscord, faTwitter, faEnvelope)

export const install: UserModule = ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}
