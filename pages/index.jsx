import React from 'react'
import Head from 'next/head'
import '../styles/styles.less'
// import { getsUserFromGoogle, getsUserFromFacebook } from '../auth/authen'
import Header from '../components/Header'

const Home = () => {
  // const handleLoginGoogle = async () => {
  //   let res = await getsUserFromGoogle()
  //   console.log(res)
  // }
  // const handleLoginFacebook = async () => {
  //   console.log(res)
  //   let res = await getsUserFromFacebook()
  // }
  //gggg

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
        <link
          href="https://fonts.googleapis.com/css?family=Mitr&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="root">
        <div
          style={{
            width: '100%',
            position: 'absolute',
            top: '0',
            zIndex: '-1',
            height: '70%',
            overflow: 'hidden',
          }}
        >
          <img
            src="./static/images/photography.jpg"
            alt=""
            style={{
              width: '100%',
              position: 'relative',
            }}
          />
        </div>
      </div>
    </div>
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
