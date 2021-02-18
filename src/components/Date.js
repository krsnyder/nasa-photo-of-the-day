import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDate = styled.form`
  color: ${pr => pr.theme.tertiaryColor};
  margin-bottom: 5vw;
`

// Date format YYYY-MM-DD

export default function Date(props) {
  const [date, setDate] = useState('YYYY-MM-DD')
  // const {dateFunc} = props
  
  function handleDate(e) {
    setDate(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(date)
  }

  return (
    <StyledDate onSubmit={handleSubmit}>
      <label>
        Date:
         <input
          type="text"
          // defaultValue='YYYY-MM-DD'
          value={date}
          onChange={handleDate} />
      </label>
      <input type="submit" value="Submit" />
    </StyledDate>
  )
}