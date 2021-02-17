import React from 'react'

export default function Details(props) {
  const date = props.apodInfo.date
  const explanation = props.apodInfo.explanation
  const copyright = props.apodInfo.copyright

  return (
    <div className='container'>
      <p>{date}</p>
      <p>{explanation}</p>
      <p>{copyright}</p>
    </div>
  )
}

