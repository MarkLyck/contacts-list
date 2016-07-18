import $ from 'jquery'
import settings from './settings'
import Contacts from './collections/contacts'

let store = {
  session: {},
  contacts: {
    refsLoaded: 0,
    refsTotal: 0,
    data: new Contacts()
  }
}

export default store
