import React from 'react'

export default function Pod(props) {
  const info = props.apodInfo

  return (
    <div className='container'>
      <h1>
        {info.title}
      </h1>
      <img src={info.url} alt={info.title}></img>
    </div>
  )
}

