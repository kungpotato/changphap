import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
<<<<<<< HEAD
import Howto from './Howto'
import LastProfile from './LastProfile'
=======
import Howto from '../components/Howto'
import LastProfile from '../components/LastProfile'
>>>>>>> ef20e82d74bcc18aae5f903e7a3dd2d01cd5a1a5

const HomeSec2 = () => {
  useEffect(() => {}, [])

  return (
    <React.Fragment>
      <Howto />
      <LastProfile />
    </React.Fragment>
  )
}

export default withRouter(HomeSec2)
