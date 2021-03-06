import * as firebase from 'firebase/app'
import Firebase from '../firebase'

export const createUserLocal = (email, password) => {
  Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)
      // ...
    })
}

export const getUserLocal = (email, password) => {
  let User = null

  Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      console.log(errorCode, errorMessage)

      // ...
    })
  Firebase.auth().onAuthStateChanged(function(user) {
    console.log(user)
    if (user) {
      User = user
    }
  })

  return User
}

export const getsUserFromGoogle = () => {
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

export const getsUserFromFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider()
  let authen = new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        let userInfo = {}
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken
        userInfo.token = token
        // The signed-in user info.
        var user = result.user
        userInfo.user = user
        // ...
        resolve(userInfo)
      })
      .catch(function(error) {
        reject(error.message)
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
        console.log(credential)
        // ...
      })
  })
  return authen
}

export const signOutUser = () => {
  Firebase.auth()
    .signOut()
    .then(function() {
      console.log('signed out')
      // Sign-out successful.
    })
    .catch(function(error) {
      console.log(error)
      // An error happened.
    })
}
