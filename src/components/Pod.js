import React from 'react'
import styled from 'styled-components'

const StyledPod = styled.div`
  color: ${pr => pr.theme.secondaryColor};
  // border: 2px solid ${pr => pr.theme.highlight};
  img {
    padding: 5px;
    border: 2px solid ${pr => pr.theme.highlight};
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

