import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import Howto from '../components/Howto'
import LastProfile from '../components/LastProfile'
import CategoryHome from '../components/CategoryHome'
import ReviewHome from '../components/ReviewHome'

const HomeSec2 = () => {
  useEffect(() => {}, [])

  return (
    <React.Fragment>
      <Howto />
      <LastProfile />
      <CategoryHome />
      <ReviewHome />
    </React.Fragment>
  )
}

export default withRouter(HomeSec2)
