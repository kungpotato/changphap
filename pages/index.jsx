import React from 'react'
<<<<<<< HEAD
=======
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from './HomeSection2'
>>>>>>> done section2
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

  return (
    <div>
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
      <HomeSec2/>
    </React.Fragment>
>>>>>>> done section2
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
