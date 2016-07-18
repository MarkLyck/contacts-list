import $ from 'jquery'
import store from '../store'
import router from '../router'
import contacts from '../collections/contacts'

function renderFooter() {
  let $footer = $(`
    <footer></footer>
  `)

  console.log(store.contacts.refsLoaded);
  console.log(store.contacts.refsTotal);
  if (store.contacts.refsTotal > store.contacts.refsLoaded+10) {
    let $nextBtn = $(`<button id="next-page" type="button" name="button">Next</button>`)
    console.log('theres more contacts to load');
    $footer.append($nextBtn)
    $nextBtn.on('click', function() {
      let hashArray = location.hash.split('contacts/')
      let currentPageNumber = Number(hashArray[hashArray.length-1])
      router.navigate(`contacts/${currentPageNumber+1}`, {trigger:true})
    })
  }


  // If there's a previous page to show.
  if (store.contacts.refsLoaded >= 10) {
    let $prevBtn = $(`<button id="prev-page" type="button" name="button">Prev</button>`)
    $footer.prepend($prevBtn)
    $prevBtn.on('click', function() {
      let hashArray = location.hash.split('contacts/')
      let currentPageNumber = Number(hashArray[hashArray.length-1])
      // Don't allow them to go to negative page numbers
      if (currentPageNumber > 0) {
        router.navigate(`contacts/${currentPageNumber-1}`, {trigger:true})
      }
    })
  }



  $('.container').append($footer)
  return $footer
}

export default renderFooter
