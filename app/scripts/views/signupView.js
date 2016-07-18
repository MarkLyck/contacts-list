import $ from 'jquery'

import router from '../router'

import settings from '../settings'
import store from '../store'

function renderSignup() {
  let $signup = $(`
    <div class="signup-modal modal">
      <h3>Sign Up</h3>
      <input id="signup-username" type="text" name="name" placeholder="User Name">
      <input id="signup-pw" type="password" name="name" placeholder="Password">
      <button id="signup-btn" type="button" name="button">Sign up</button>

      <button id="goto-login" type="button" name="button">or Login</button>
    </div>
  `)

  let $signupUsername = $signup.find('#signup-username')
  let $signupPW = $signup.find('#signup-pw')
  let $signupBtn = $signup.find('#signup-btn')
  let $gotoLogin = $signup.find('#goto-login')

  $signupBtn.on('click', function() {
    if ($signupUsername.val() !== '' && $signupPW.val() !== '') {
      let username = $signupUsername.val()
      let password = $signupPW.val()

      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appKey}/`,
        contentType: 'application/json',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        success: function(response) {
          store.session.username = username
          store.session.authtoken = response._kmd.authtoken;
          store.session._id = response._id

          sessionStorage.session = JSON.stringify(store.session)

          router.navigate('contacts', {trigger:true})
          console.log('SIGNED UP')
        },
        error: function(response) {
          console.log('Error: ', response)
        }
      })
    } else {
      throw new Error('Email or Password field is empty')
    }
  })

  $gotoLogin.on('click', function() {
    router.navigate('login', {trigger:true})
  })

  return $signup
}

export default renderSignup
