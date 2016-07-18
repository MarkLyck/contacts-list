import $ from 'jquery'
import Backbone from 'backbone'

import store from './store'
import settings from './settings'

import renderLogin from './views/loginView'
import renderSignup from './views/signupView'
import renderContacts from './views/contactsView'
// import contacts from './collections/contacts'

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
    console.log('store session: ', store.session);
    if (store.session.authtoken) {
      console.log('ALREADY HAVE USER!');
      router.navigate('contacts', {trigger:true})
    } else {
      console.log('LOGIN')
      let $loginModal = renderLogin()
      $container.empty().append($loginModal)
    }
  },
  signup: function() {
    console.log('SIGNUP')
    let $signupModal = renderSignup()
    $container.empty().append($signupModal)
  },
  contacts: function(page) {
    console.log('RENDER CONTACTS');

    if (page) {
      settings.pagination = `?query={}&limit=10&skip=${page*10}`
      store.contacts.refsLoaded = page*10
    } else {
      location.hash = '#contacts/0'
    }

    let $header = renderHeader()
    // let $footer = renderFooter()
    $container.empty().append($header)

    store.contacts.data.fetch({
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts/${settings.pagination}`,
      success: function() {
        let $contacts = renderContacts(page)
        $container.append($contacts)
    }})
  },
  newContact: function() {
    console.log('RENDER NEW CONTACT FORM');
    let $contactForm = renderContactForm()
    $container.append($contactForm)
  }
})

const router = new Router()

export default router
