import * as firebase from 'firebase/app'
import Firebase from '../firebase'

const getsUser = () => {
  // var id_token = googleUser.getAuthResponse().id_token
  const provider = new firebase.auth.GoogleAuthProvider()
  let authen = new Promise((resolve, reject) => {
    Firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
        let userInfo = {}
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken
        userInfo.token = token
        // The signed-in user info.
        var user = result.user
        userInfo.user = user
        resolve(userInfo)
        // ...
      })
      .catch(function(error) {
        reject(error.message)
        // Handle Errors here.
        var errorCode = error.code
        console.log(errorCode)
        var errorMessage = error.message
        console.log(errorMessage)
        // The email of the user's account used.
        var email = error.email
        console.log(email)
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(credential)
        // ...
      })
  })
  return authen
}

export default getsUser
