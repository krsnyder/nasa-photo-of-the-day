/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Pod from './components/Pod'
import Details from './components/Details'
import background from './Stars.jpg'

const API_KEY = 'FljXaLu5RhVP9OfEF0Kdwk2C7IdnpablRm6fD5J2'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

function App() {
  const [apod, setApod] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setApod(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      {/* <Header /> */}
      <Pod apodInfo={apod} />
      <Details apodInfo={apod} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
