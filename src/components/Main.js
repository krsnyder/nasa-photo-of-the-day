import React from 'react'

export default function Main(props) {
  const apodInfo = props
  const info = (Object.values(apodInfo)[0])

  return (
    <div className='container'>
      <h1>
        {info.title}
      </h1>
      <img src={info.url} alt={info.title}></img>
    </div>
  )
}