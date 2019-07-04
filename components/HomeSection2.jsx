import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import Howto from './Howto'
import LastProfile from './LastProfile'

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
