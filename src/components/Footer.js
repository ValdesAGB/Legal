import React from 'react'
import Blogs from './Blogs'
import Coordonnes from './Coordonnes'
import styled from 'styled-components'
import APropos from './APropos'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const FooterFooter = styled.footer`
  background-color: ${color.countNumbersColor};
  color: ${color.main};
  padding: 20% 0;
  @media (min-width: 768px) {
    padding: 10% 0;
  }
  @media (min-width: 1400px) {
    padding: 5% 0;
  }
`
const AProposContainer = styled.div`
  margin-bottom: 20%;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`
const BlogsContainer = styled.div`
  margin-bottom: 20%;
  @media (min-width: 768px) {
    margin-bottom: 10%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`
const Copyright = styled.div`
  background-color: ${color.copyrightBgColor};
  color: ${color.footerIconeColor};
  font-family: ${police.second};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
`

const CopyrightContent = styled.p`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;
  a {
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    color: ${color.footerIconeColor};
    transition: color 0.5s, transform 0.5s 0.2s;
    &:hover {
      transform: scale(0.95);
      color: ${color.homeBtnColor};
    }
  }
`
const date = new Date()

function Footer() {
  return (
    <React.Fragment>
      <FooterFooter className="row">
        <div>
          <div className="container">
            <div className="row">
              <AProposContainer className="col-md-6 col-lg">
                {<APropos />}
              </AProposContainer>
              <BlogsContainer className="col-md-6 col-lg">
                {<Blogs />}
              </BlogsContainer>
              <div className="col-md-6 col-lg">{<Coordonnes />}</div>
            </div>
          </div>
        </div>
      </FooterFooter>
      <Copyright className="row">
        <CopyrightContent className="text-center">
          &copy; {date.getFullYear()},{' '}
          <a href="https://webgrowth.valdesagbokoni.com/" target="_blank">
            WebGrowth
          </a>{' '}
          All Rights Reserved.
        </CopyrightContent>
      </Copyright>
    </React.Fragment>
  )
}

export default Footer
