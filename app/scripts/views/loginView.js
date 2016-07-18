import $ from 'jquery'

import router from '../router'

import settings from '../settings'
import store from '../store'

function renderLogin() {
  let $login = $(`
    <div class="modal-container">
			<div class="login-modal modal">
				<h3>Login</h3>
				<input id="login-username" type="text" name="name" placeholder="username">
				<input id="login-pw" type="password" name="name" placeholder="Password">
				<button id="login-btn" type="button" name="button">Login</button>

        <button id="goto-signup" type="button" name="button">or Signup</button>
			</div>
		</div>
  `)

  let $loginUsername = $login.find('#login-username')
  let $loginPw = $login.find('#login-pw')
  let $loginBtn = $login.find('#login-btn')
  let $gotoSignup = $login.find('#goto-signup')

  $loginBtn.on('click', function() {
    if ($loginUsername.val() !== '' && $loginPw.val() !== '') {
      let username = $loginUsername.val()
      let password = $loginPw.val()

      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
        contentType: 'application/json',
        data: JSON.stringify({
          username: username,
          password: password,
        }),
        success: function(response) {
          console.log('YOU LOGGED IN');
          console.log(response);
          store.session.username = username
          store.session.authtoken = response._kmd.authtoken;
          store.session.contacts = response.contacts
          store.session._id = response._id

          router.navigate('contacts', {trigger:true})
        },
        error: function(response) {
          console.log('ERROR: ', response)
        }
      })
    } else {
      throw new Error('Email or Password is blank')
    }
  })

  $gotoSignup.on('click', function() {
    router.navigate('signup', {trigger:true})
  })

  return $login
}

export default renderLogin
