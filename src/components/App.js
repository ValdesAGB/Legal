import React from 'react'
import Home from './Home'
import { createGlobalStyle } from 'styled-components'
import Counts from './Counts'
import About from './About'
import Pratice from './Pratice'
import Experted from './Experted'
import Us from './Us'
import Feedback from './Feedback'
import Clients from './Clients'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'

function App() {
  const GlobalStyle = createGlobalStyle`
 *{
  font-family: 'Open Sans', sans-serif
 }
 `
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main className="row">
        <Home />
        <Counts />
        <About />
        <Pratice />
        <Experted />
        <Us />
        <Feedback />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
