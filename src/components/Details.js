import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
  color: ${pr => pr.theme.secondaryColor};
  border: 2px solid ${pr => pr.theme.highlight};
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

