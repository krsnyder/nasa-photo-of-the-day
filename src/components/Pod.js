import React from 'react'
import styled from 'styled-components'

const StyledPod = styled.div`
  padding: 5px;
  img {
    box-shadow: 0 4px 6px 0 rgb(34, 60, 80, 0.16);
  }
`

export default function Pod(props) {
  const { info } = props

  return (
    <StyledPod className='container'>
      <h2>
        {info.title}
      </h2>
      <img src={info.url} alt={info.title}></img>
    </StyledPod>
  )
}

