import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Styled Components
import { ThemeProvider } from 'styled-components'
import theme from './theme'
// import Light from './theme/LightMode'


ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>,
  document.getElementById("root")
);
