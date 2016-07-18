import $ from 'jquery'
import router from '../router'

function renderHeader() {
  let $header = $(`
    <header>
      <nav>
        <button id="search-btn" type="button" name="button">search</button>
        <h2>Contacts</h2>
        <button id="new-contact-btn" type="button" name="button">+</button>
      </nav>
    </header>
  `)
  $header.find('#new-contact-btn').on('click', function() {
    router.navigate('contacts/new', {trigger:true})
  })

  return $header
}

export default renderHeader
