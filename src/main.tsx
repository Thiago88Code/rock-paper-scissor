import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OptionsProvider } from './context/optionContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </React.StrictMode>,
)
