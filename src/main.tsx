import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store, {persistor} from 'store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {PersistGate} from 'redux-persist/es/integration/react'
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  ,
  html, body {
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
              <App />
              <ToastContainer />
          </PersistGate>

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
