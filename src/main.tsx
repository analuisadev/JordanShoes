import { GlobalStyle } from './GlobalStyles'
import { Aside } from './components/aside/Aside'
import { Header } from './components/header/Header'

import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Aside />
    <Header />
  </React.StrictMode>,
)
