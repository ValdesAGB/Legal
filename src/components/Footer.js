import React from 'react'
import Blogs from './Blogs'
import Coordonnes from './Coordonnes'
import styled from 'styled-components'
import APropos from './APropos'

function Footer() {
  const FooterFooter = styled.footer`
    background-color: #363636;
    color: #ffffff;
    padding: 10% 2% 5% 5%;
    @media (min-width: 2560px) {
      padding: 5% 2% 2% 5%;
    }
  `

  const Corpyright = styled.div`
    background-color: #272727;
    padding: 33px 0;
    color: #888888;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
  `

  const DivContent = styled.div`
    @media (min-width: 2560px) {
      padding-left: 20%;
      padding-right: 20%;
    }
  `
  const date = new Date()
  return (
    <React.Fragment>
      <FooterFooter className="row">
        <div className="row ">
          <DivContent className="col-12 ">
            <div className="row">
              <div className="col-md-6 col-lg mb-5">{<APropos />}</div>
              <div className="col-md-6 col-lg mb-5 mx-md-2">{<Blogs />}</div>
              <div className="col-md-6 col-lg">{<Coordonnes />}</div>
            </div>
          </DivContent>
        </div>
      </FooterFooter>
      <Corpyright className="row justify-content-center">
        &copy; {date.getFullYear()}, All Rights Reserved.
      </Corpyright>
    </React.Fragment>
  )
}

export default Footer
