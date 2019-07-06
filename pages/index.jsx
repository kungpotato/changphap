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
      <SearchBox />
      <HomeSec2 />
    </React.Fragment>
  )
}

export default Home
