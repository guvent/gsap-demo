import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GsapContextProvider } from './gsapContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GsapContextProvider>
      <App />
    </GsapContextProvider>
  </React.StrictMode>,
)
