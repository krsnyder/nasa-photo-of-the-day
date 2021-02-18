import React from 'react'

export default function Header(props) {
  const { info } = props

  return (
    <div className='header'>
      <h1>NASA's Astronomy Photo of the Day!</h1>
      <p>Today's Date is: {info.date}</p>
    </div>
  )
}

