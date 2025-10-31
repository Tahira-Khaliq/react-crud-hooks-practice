import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/MyContext.jsx'
import { Provider } from 'react-redux'
import { reduxStore } from './store/store.js'

createRoot(document.getElementById('root')).render(
   <StrictMode>
   <ContextProvider>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <App />
    
    </BrowserRouter>
  </Provider>
    </ContextProvider>
   </StrictMode>
)



