import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
<<<<<<< HEAD
import HomeSec2 from '../components/HomeSection2'
=======
import HomeSec2 from './HomeSection2'
import '../styles/styles.less'
>>>>>>> ef20e82d74bcc18aae5f903e7a3dd2d01cd5a1a5

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
