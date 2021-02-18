import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display:flex;
  align-items:center;
  width: 100%;
`

export default function Header(props) {
  const { info } = props

  return (
    <StyledHeader className='container'>
      <h1>NASA's Astronomy Photo of the Day!</h1>
      <p>Today's Date is: {info.date}</p>
    </StyledHeader>
  )
}

