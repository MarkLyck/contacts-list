import $ from 'jquery'
import router from '../router'
import settings from '../settings'
import store from '../store'
import renderContacts from './contactsView'

function renderHeader() {
  let $header = $(`
    <header>
      <nav>
        <div class="wrapper">
          <button id="new-contact-btn" type="button" name="button"><i class="fa fa-plus" aria-hidden="true"></i></button>
          <button id="search-btn" type="button" name="button"><i class="fa fa-search" aria-hidden="true"></i></button>
          <input id="search-bar" type="text" placeholder="Search...">
        </div>

        <h2>Contacts</h2>
        <button id="logout-btn" type="button" name="button"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
      </nav>
    </header>
  `)

  let $searchBar = $header.find('#search-bar')

  $header.find('#logout-btn').on('click', function() {

    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
      contentType: 'application/json',
      success: function() {
        sessionStorage.removeItem('session')
        delete store.session.authtoken

        router.navigate('login', {trigger:true})
      }
    })
  })

  $header.find('#new-contact-btn').on('click', function() {
    router.navigate('contacts/new', {trigger:true})
  })

  $header.find('#search-btn').on('click', function() {
    $header.find('.wrapper').toggleClass('searching')
  })

  $searchBar.on('keyup', function() {
    store.contacts.data.fetch({
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/contacts/?query={"name":"${$searchBar.val()}"}`,
      success: function(response) {
        let $contacts = renderContacts()
        $('#contact-list').remove()
        $('.container').append($contacts)
    }})
    console.log('yay');
  })

  return $header
}

export default renderHeader
