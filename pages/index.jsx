import React from 'react'
<<<<<<< HEAD
=======
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from './HomeSection2'
>>>>>>> fix
import '../styles/styles.less'
// import { getsUserFromGoogle, getsUserFromFacebook } from '../auth/authen'
<<<<<<< HEAD
=======
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from '../components/HomeSection2'
>>>>>>> develope

const Home = () => {
  return (
    <React.Fragment>
      <Header />
<<<<<<< HEAD
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
=======
      <SearchBox />
      <HomeSec2 />
    </React.Fragment>
>>>>>>> develope
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
