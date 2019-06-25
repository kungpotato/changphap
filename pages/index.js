import Firebase from '../firebase'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  )
}

Home.getInitialProps = () => {
  let db = Firebase.firestore();
  let data = []
  db.collection('mytest').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        data.push(doc.data())
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  return data
}

export default Home
