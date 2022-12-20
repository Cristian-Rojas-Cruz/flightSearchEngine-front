import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './views/App'
import './assets/scss/index.scss'
import { ThemeProvider } from '@mui/material/styles'
import theme from './config/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './router/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <RouterView/>
      </React.StrictMode>
    </ThemeProvider>
  </Router>
)