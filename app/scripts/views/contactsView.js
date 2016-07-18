import $ from 'jquery'
import store from '../store'
import contacts from '../collections/contacts'

function renderContacts() {
  let $contacts = $(`
    <ul id="contact-list">

    </ul>
  `)

  console.log(contacts);
  contacts.each(function(contact) {
    console.log('contact: ', contact);
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
  // store.session.contacts.forEach(contact => {
  //   let $li = $(`
  //     <li>
  //       <h3>${contact.name}</h3>
  //       <h5>${contact.nick}</h5>
  //       <h5>${contact.email}</h5>
  //       <h5>${contact.phone}</h5>
  //     </li>
  //   `)
  //   $contacts.append($li)
  // })

  return $contacts
}

export default renderContacts
