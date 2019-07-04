import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from './HomeSection2'
import '../styles/styles.less'
// import { getsUserFromGoogle, getsUserFromFacebook } from '../auth/authen'

const Home = () => {
  return (
    <React.Fragment>
      <Header />

      <div className='root'>
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
            src='./static/images/photography.jpg'
            alt=''
            style={{
              width: '100%',
              position: 'relative',
            }}
          />
        </div>
      </div>

      <SearchBox />
      <HomeSec2 />
    </React.Fragment>
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
