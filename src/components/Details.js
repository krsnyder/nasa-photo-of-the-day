import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
  color: ${pr => pr.theme.tertiaryColor};
  width: 70vw;
  padding: 10px;
`

export default function Details(props) {
  const { info } = props

  return (
    <StyledDetails className='container'>
      <p>{info.explanation}</p>
      <p>{info.copyright}</p>
    </StyledDetails>
  )
}

