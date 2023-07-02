import React from 'react'

import Home from '../../components/Home'
import Counts from '../../components/Counts'
import About from '../../components/About'
import Pratice from '../../components/Pratice'
import Experted from '../../components/Experted'
import Us from '../../components/Us'
import Feedback from '../../components/Feedback'
import Clients from '../../components/Clients'
import Contact from '../../components/Contact'

function Accueil() {
  return (
    <React.Fragment>
      <Home />
      <Counts />
      <About />
      <Pratice />
      <Experted />
      <Us />
      <Feedback />
      <Clients />
      <Contact />
    </React.Fragment>
  )
}

export default Accueil
