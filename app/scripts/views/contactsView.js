import $ from 'jquery'
import store from '../store'
import settings from '../settings'
import contacts from '../collections/contacts'
import renderFooter from './footerView'

function renderContacts() {
  $.ajax(`https://baas.kinvey.com/appdata/${settings.appKey}/contacts/_count`).then(function(response) {
    console.log('response: ', response);
    store.contacts.refsTotal = response.count
    if (response.count > 10) {
      renderFooter()
    }
  })

  let $contacts = $(`
    <ul id="contact-list">

    </ul>
  `)


  store.contacts.data.each(function(contact) {
    let $li = $(`
        <li>
          <h3>${contact.get('name')}</h3>
          <h5>${contact.get('nick')}</h5>
          <h5>${contact.get('email')}</h5>
          <h5>${contact.get('phone')}</h5>
        </li>
      `)
      $contacts.append($li)
  })

  return $contacts
}

export default renderContacts
