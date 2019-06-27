import React from 'react'
import { getsUserFromGoogle, getsUserFromFacebook } from '../auth/authen'

const Home = () => {
  const handleLoginGoogle = async () => {
    let res = await getsUserFromGoogle()
    console.log(res)
  }
  const handleLoginFacebook = async () => {
    let res = await getsUserFromFacebook()
    console.log(res)
  }

  return (
    <div>
      <h1>kungpotato</h1>
      <h2>Hello</h2>
      <button type="button" onClick={handleLoginGoogle}>
        login google
      </button>
      <button type="button" onClick={handleLoginFacebook}>
        login facebook
      </button>
      <style jsx>
        {`
          h1 {
            color: #4287f5;
          }
          h2 {
            color: #43cc31;
          }
        `}
      </style>
    </div>
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
