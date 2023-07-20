import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Accueil from '../Pages/Accueil'
import BlogsPages from '../Pages/Blogs'
import ScrollToTopOnPageChange from './ScrollToTopOnPageChange'
import NotFound from '../Pages/404'
import { police } from '../untils/police'

const GlobalStyle = createGlobalStyle`
* {
    font-family:${police.second}
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <ScrollToTopOnPageChange />
      <main className="row">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/blog" element={<BlogsPages />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
