import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <StyledEngineProvider injectFirst>
       <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
)
