import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import Howto from '../components/Howto'
import LastProfile from '../components/LastProfile'

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
