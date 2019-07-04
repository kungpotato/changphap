import React from 'react'
import '../styles/styles.less'
// import { getsUserFromGoogle, getsUserFromFacebook } from '../auth/authen'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from '../components/HomeSection2'

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBox />
      <HomeSec2 />
    </React.Fragment>
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
