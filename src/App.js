/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
// import Header from './components/Header'
import Main from './components/Main'
// import Footer from './components/Footer'
const API_KEY = 'FljXaLu5RhVP9OfEF0Kdwk2C7IdnpablRm6fD5J2'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

function App() {
  const [apod, setApod] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setApod(res.data)
        // console.log(res.data.title)
      })
      .catch(err => {
        debugger
      })
  }, [])
  
  return (
    <div className="App">
      {/* <Header /> */}
      <Main apodInfo={apod} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
