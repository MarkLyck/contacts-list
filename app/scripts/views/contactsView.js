import $ from 'jquery'
import store from '../store'

function renderContacts() {
  let $contacts = $(`
    <ul class="contact-list">

    </ul>
  `)
  console.log(store.session);

  store.session.contacts.forEach(contact => {
    let $li = $(`
      <li>
        <h3>${contact.name}</h3>
        <h5>${contact.nick}</h5>
        <h5>${contact.email}</h5>
        <h5>${contact.phone}</h5>
      </li>
    `)
    console.log('Contact: ', contact);
    $contacts.append($li)
  })

  return $contacts
}

export default renderContacts
