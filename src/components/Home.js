import React from 'react'
import styled from 'styled-components'
import { width } from '../data'
import 'animate.css'

function Home() {
  const HomeSection = styled.section`
    position: relative;
    background-image: url('https://landing.zytheme.com/legal/assets/images/slider/slide-1.jpg');
    background-size: cover;
    background-position: center;
    @media (min-width: 320px) {
      padding-top: 50%;
      padding-bottom: 80%;
    }

    @media (min-width: 375px) {
      padding-top: 40%;
      padding-bottom: 70%;
    }
    @media (min-width: 425px) {
      padding-top: 30%;
    }
    @media (min-width: 768px) {
      padding-top: 20%;
      padding-bottom: 35%;
    }

    @media (min-width: 1024px) {
      padding-bottom: 25%;
    }

    @media (min-width: ${width}px) {
      padding-bottom: 20%;
    }
    @media (min-width: 2560px) {
      padding-top: 15%;
    }

    padding-bottom: 10%;
  `

  const Title = styled.h1`
    color: #ffffff;
    font-family: 'Merriweather', serif;

    margin-bottom: 20px;
    text-transform: capitalize;
    @media (min-width: 320px) {
      font-size: 1.5em;
      font-weight: 700;
    }
    @media (min-width: 425px) {
      font-size: 1.9em;
    }
    @media (min-width: 1024px) {
      font-size: 3em;
    }
    @media (min-width: ${width}px) {
      font-size: 5em;
    }
  `

  const SubTitle = styled.h3`
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;

    margin-bottom: 47px;
    margin-top: 10px;
    @media (min-width: 320px) {
      font-size: 0.9em;
      font-weight: 400;
    }
    @media (min-width: 1024px) {
      font-size: 1.5em;
      line-height: 1.5;
    }
  `

  const Button = styled.button`
    color: #d8ae76;
    background-color: transparent;
    border-color: #d8ae76;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    border-radius: 6px;
    padding: 0;
    line-height: 53px;
    width: 210px;
    height: 53px;
    transition: color 500ms, background-color 400ms;
    &:hover {
      color: white;
      background-color: #d8ae76;
    }
  `
  const DivContent = styled.div`
    position: relative;
    z-index: 1;
  `
  const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  `
  return (
    <React.Fragment>
      <HomeSection className="">
        <DivContent className="text-center row justify-content-center">
          <div className="col-12 col-md-10 col-xxl-6 row justify-content-center">
            <Title className=" animate__animated animate__fadeInUp animate__slow">
              Welcome To Legal Firm
            </Title>
            <SubTitle className="col-md-9 col-xl-10 col-xxl-12  animate__animated animate__fadeInUp animate__slow">
              This should be used to tell a story and let your users know a
              little more about your service.
            </SubTitle>
            <Button className="btn  animate__animated animate__fadeInUp animate__slow">
              Free consultation
            </Button>
          </div>
        </DivContent>
        <Div></Div>
      </HomeSection>
    </React.Fragment>
  )
}

export default Home
