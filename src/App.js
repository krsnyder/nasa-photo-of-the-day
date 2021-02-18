/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Header from './components/Header'
import Pod from './components/Pod'
import Details from './components/Details'
import Date from './components/Date'
import styled from 'styled-components'

const API_KEY = 'FljXaLu5RhVP9OfEF0Kdwk2C7IdnpablRm6fD5J2'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: ${pr => pr.theme.tertiaryColor};
`

function App() {
  const [apod, setApod] = useState('')
  const [date, setDate] = useState('')
// Query for date &date=${date}
  
  
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setApod(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  function dateSetter(userInput) {
    setDate(userInput)
  }

  return (
    <StyledApp className="App">
      <Header info={apod}/>
      <Pod info={apod} />
      <Details info={apod} />
      <Date dateFunc={dateSetter}/>
    </StyledApp>
  );
}

export default App;
