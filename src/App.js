import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

// Importing modules
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
const [apod, setApod] = useState(/*Unsure what data will look like*/)

  useEffect(() => {
    axios.get(`${/*API CALL*/}`)
      .then(res => {
      setApod(res.data)
      })
      .catch(err => {
        debugger
    })
}, [])





  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
