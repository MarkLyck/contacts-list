import $ from 'jquery'
// import $ from 'jquery-ui'
// import jqueryUI from 'jquery-ui'

import Backbone from 'backbone'

import router from './router'
import settings from './settings'
import store from './store'

// window.$ = $

$(document).ajaxSend(function(e, xhrAjax, jqueryAjax) {
  if (store.session.authtoken) {
    xhrAjax.setRequestHeader('Authorization', `Kinvey ${store.session.authtoken}`)
  } else {
    xhrAjax.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
  }
})

if (sessionStorage.session) {
  store.session = JSON.parse(sessionStorage.session)
}

Backbone.history.start()

if (!store.session.username) {
  // router.navigate('login', {trigger:true})
}
