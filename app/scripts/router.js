import $ from 'jquery'
import Backbone from 'backbone'

import store from './store'
import settings from './settings'

import renderLogin from './views/loginView'
import renderSignup from './views/signupView'
import renderContacts from './views/contactsView'

import renderHeader from './views/headerView'
import renderFooter from './views/footerView'

import renderContactForm from './views/contactFormView'

let $container = $('.container')

const Router = Backbone.Router.extend({
  routes: {
    login           : 'login',
    signup          : 'signup',
    contacts        : 'contacts',
    'contacts/new'  : 'newContact',
    'contacts/:page': 'contacts',
    '/*'            : 'login'
  },
  login: function() {
    if (store.session.authtoken) {
      router.navigate('contacts', {trigger:true})
    } else {
      let $loginModal = renderLogin()
      $container.empty().append($loginModal)
    }
  },
  signup: function() {
    let $signupModal = renderSignup()
    $container.empty().append($signupModal)
  },
  contacts: function(page) {
    console.log('testing');
    if (page) {
      settings.pagination = `?query={}&limit=10&skip=${page*10}`
      store.contacts.refsLoaded = page*10
    } else {
      this.navigate('contacts/0')
    }

    let $header = renderHeader()
    $container.empty().append($header)


    store.contacts.data.fetch({
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts/${settings.pagination}`,
      success: function() {
        let $contacts = renderContacts()
        $container.append($contacts)
    }})
  },
  newContact: function() {
    let $contactForm = renderContactForm()
    $container.append($contactForm)
  }
})

const router = new Router()

export default router
