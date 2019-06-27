import React from 'react'

const Test = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <h1>{data[0].person}</h1>
    </div>
  )
}

export default Test
