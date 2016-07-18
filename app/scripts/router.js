import $ from 'jquery'
import Backbone from 'backbone'

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
    'contacts/:id'  : 'singleContact',
    '/*'            : 'login'
  },
  login: function() {
    console.log('LOGIN')
    let $loginModal = renderLogin()
    $container.empty().append($loginModal)
  },
  signup: function() {
    console.log('SIGNUP')
    let $signupModal = renderSignup()
    $container.empty().append($signupModal)
  },
  contacts: function() {
    console.log('RENDER CONTACTS');
    let $contacts = renderContacts()
    let $header = renderHeader()
    let $footer = renderFooter()
    $container.empty().append($header).append($contacts).append($footer)
  },
  newContact: function() {
    console.log('RENDER NEW CONTACT FORM');
    let $contactForm = renderContactForm()
    $container.append($contactForm)
  }
})

const router = new Router()

export default router
