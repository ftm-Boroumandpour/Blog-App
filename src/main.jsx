// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/fonts.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import theme from './mui/theme.js'
import { BrowserRouter } from 'react-router-dom'



const client = new ApolloClient({
  // uri: "https://api-ca-central-1.hygraph.com/v2/cltkjre2a0unj07w7m8oohy1f/master",
  uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>


)
