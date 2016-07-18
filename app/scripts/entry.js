import $ from 'jquery'
import Backbone from 'backbone'

import router from './router'

import settings from './settings'
import store from './store'

$(document).ajaxSend(function(e, xhrAjax, jqueryAjax) {
  if (store.session.authtoken) {
    xhrAjax.setRequestHeader('Authorization', `Kinvey ${store.session.authtoken}`)
  } else {
    xhrAjax.setRequestHeader('Authorization', `Basic ${settings.basicAuth}`)
  }
})

Backbone.history.start()
