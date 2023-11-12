import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  },
  html, body {
    padding: 0;
    margin: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyle/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
