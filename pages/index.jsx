import React from 'react'
import Head from 'next/head'
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
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
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
