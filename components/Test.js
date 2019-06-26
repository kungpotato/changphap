import Firebase from '../firebase'

const Test = ({ result }) => {
  console.log(result)
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  )
}

Test.getInitialProps = async function() {
  let res = []
  let db = Firebase.firestore()
  let result = await new Promise((resolve, reject) => {
    db.collection('mytest')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          res.push(Object.assign({ id: doc.id }, doc.data()))
          console.log(res)
          resolve(res)
        })
      })
      .catch(err => {
        reject(err.message)
        console.log('Error getting documents', err)
      })
  })
  return { result }
}

export default Test
