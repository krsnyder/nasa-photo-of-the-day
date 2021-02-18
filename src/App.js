/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header'
import Pod from './components/Pod'
import Details from './components/Details'
import Date from './components/Date'

const API_KEY = 'FljXaLu5RhVP9OfEF0Kdwk2C7IdnpablRm6fD5J2'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

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
    <div className="App">
      <Header info={apod}/>
      <Pod info={apod} />
      <Details info={apod} />
      <Date dateFunc={dateSetter}/>
    </div>
  );
}

export default App;
