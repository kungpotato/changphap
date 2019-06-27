import Firebase from '../firebase'
import Test from '../components/Test'

const TestPage = ({ result }) => {
  return (
    <div>
      <Test data={result} />
    </div>
  )
}

TestPage.getInitialProps = async () => {
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

export default TestPage
