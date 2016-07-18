import $ from 'jquery'
import Backbone from 'backbone'
import store from '../store'
import settings from '../settings'
import router from '../router'
import contacts from '../collections/contacts'

function renderContactForm() {
  let $contactForm = $(`
    <div class="modal-container">
      <div class="new-contact-modal modal">
        <h3>New contact</h3>
        <input id="new-contact-name" type="text" name="name" placeholder="Full Name">
        <input id="new-contact-nickname" type="text" name="name" placeholder="Nickname">
        <input id="new-contact-email" type="text" name="name" placeholder="Email Address">
        <input id="new-contact-number" type="text" name="name" placeholder="Phone Number">
        <button id="create-contact-btn" type="button" name="button">Create contact</button>
      </div>
    </div>
  `)

  let $cName = $contactForm.find('#new-contact-name')
  let $cNick = $contactForm.find('#new-contact-nickname')
  let $cEmail = $contactForm.find('#new-contact-email')
  let $cPhone = $contactForm.find('#new-contact-number')

  $contactForm.find('#create-contact-btn').on('click', function() {
    console.log('CLICKED CREATE');
    if ($cName.val() !== '') {

      contacts.create({
        name: $cName.val(),
        nick: $cNick.val(),
        email: $cEmail.val(),
        phone: $cPhone.val()
      })

      router.navigate('contacts', {trigger:true})

      // $.ajax({
      //   type: 'PUT',
      //   url: `https://baas.kinvey.com/user/${settings.appKey}/${store.session._id}`,
      //   contentType: 'application/json',
      //   data: JSON.stringify({
      //     contacts: store.session.contacts
      //   }),
      //   success: function(response) {
      //     console.log('UPDATED USER');
      //   },
      //   error: function(response) {
      //     console.log('ERROR: ', response)
      //   }
      // })
    } else {
      throw new Error('You must give your contact a name')
    }
  })
  return $contactForm
}

export default renderContactForm
