import React, { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <label>
        Date:
         <input
          type="text"
          // defaultValue='YYYY-MM-DD'
          value={date}
          onChange={handleDate} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}