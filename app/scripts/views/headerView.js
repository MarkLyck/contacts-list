import $ from 'jquery'
import router from '../router'
import settings from '../settings'
import store from '../store'

function renderHeader() {
  let $header = $(`
    <header>
      <nav>
        <button id="search-btn" type="button" name="button">search</button>
        <h2>Contacts</h2>
        <button id="new-contact-btn" type="button" name="button">+</button>
        <button id="logout-btn" type="button" name="button">LOGOUT</button>
      </nav>
    </header>
  `)
  $header.find('#logout-btn').on('click', function() {
    console.log('test')
    sessionStorage.removeItem('session')

    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
      contentType: 'application/json',
      // data: JSON.stringify({
      //   username: ses,
      //   password: password,
      // }),
      success: function() {
        console.log('YOU LOGGED OUT!');
        router.navigate()
      }
    })
  })
  $header.find('#new-contact-btn').on('click', function() {
    router.navigate('contacts/new', {trigger:true})
  })

  return $header
}

export default renderHeader
