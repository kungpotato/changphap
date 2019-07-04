import React from 'react'
<<<<<<< HEAD
=======
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from './HomeSection2'
>>>>>>> fix
import '../styles/styles.less'
// import { getsUserFromGoogle, getsUserFromFacebook } from '../auth/authen'

const Home = () => {
  // const handleLoginGoogle = async () => {
  //   let res = await getsUserFromGoogle()
  //   console.log(res)
  // }
  // const handleLoginFacebook = async () => {
  //   console.log(res)
  //   let res = await getsUserFromFacebook()
  // }

  return (
    <React.Fragment>
      <Header />
<<<<<<< HEAD
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
=======
      <SearchBox />
      <HomeSec2 />
    </React.Fragment>
>>>>>>> fix
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
