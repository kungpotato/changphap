import React from 'react'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import HomeSec2 from './HomeSection2'
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
      <SearchBox />
      <HomeSec2 />
    </React.Fragment>
  )
}

// Home.getInitailProps = async () => {
//   getsUser()
// }

export default Home
