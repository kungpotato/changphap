import Firebase from '../firebase'

export const addNewUser = (
  username,
  password,
  firstName,
  lastName,
  email,
  phone
) => {
  var db = Firebase.firestore()
  db.collection('users')
    .add({
      auth: {
        username,
        password,
      },
      name: {
        firstName,
        lastName,
      },
      email,
      phone,
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function(error) {
      console.error('Error adding document: ', error)
    })
}
