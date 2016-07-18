import $ from 'jquery'

function renderFooter() {
  let $footer = $(`
    <footer>
      <button id="prev-page" type="button" name="button">Prev</button>
      <button id="next-page" type="button" name="button">Next</button>
    </footer>
  `)
  return $footer
}

export default renderFooter
