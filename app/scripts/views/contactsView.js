import $ from 'jquery'
import store from '../store'
import settings from '../settings'
import contacts from '../collections/contacts'
import renderFooter from './footerView'

function renderContacts() {
  console.log('RENDERING CONTACTS');
  $.ajax(`https://baas.kinvey.com/appdata/${settings.appKey}/contacts/_count`).then(function(response) {
    // console.log('response: ', response);
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
          <h3 class="contact-name">${contact.get('name')}</h3>
          <div class="dropdown">
            <h4 class="contact-nick">${contact.get('nick')}</h4>
            <h4 class="contact-email">${contact.get('email')}</h4>
            <h4 class="contact-phone">${contact.get('phone')}</h4>
          </div>
        </li>
      `)
      $li.on('click', function() {
        $li.toggleClass('show-dropdown')
      })
      $contacts.append($li)
  })

  return $contacts
}

export default renderContacts
