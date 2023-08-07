import React from 'react'
import styled from 'styled-components'
import 'animate.css'
import { police } from '../untils/police'
import { color } from '../untils/colors'

const BgImage =
  'https://landing.zytheme.com/legal/assets/images/slider/slide-1.jpg'
const HomeSection = styled.section`
  position: relative;
  background-image: url(${BgImage});
  background-size: cover;
  background-position: center;

  padding-top: 35%;
  padding-bottom: 250px;

  @media (min-width: 576px) {
    padding-top: 30%;
    padding-bottom: 250px;
  }
  @media (min-width: 768px) {
    padding-top: 250px;
    padding-bottom: 35%;
  }

  @media (min-width: 992px) {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  @media (min-width: 1200px) {
    padding-top: 16%;
    padding-bottom: 15%;
  }
  @media (min-width: 1400px) {
    padding-top: 15%;
  }
`

const Container = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0;
  }
`

const Title = styled.h1`
  color: ${color.main};
  font-family: ${police.main};
  text-transform: capitalize;

  font-size: 2em;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.9em;
  }
  @media (min-width: 992px) {
    font-size: 3em;
  }
  @media (min-width: 1200px) {
    font-size: 5em;
  }
`

const SubTitle = styled.h3`
  color: ${color.main};
  font-family: ${police.second};
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 0.9em;
  font-weight: 400;

  @media (min-width: 1200px) {
    font-size: 1.3em;
    font-weight: 300;
  }
`

const Button = styled.button`
  color: ${color.homeBtnColor};
  background-color: transparent;
  font-family: ${police.second};
  border: solid 1px ${color.homeBtnColor};
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  transition: color 500ms 200ms, background-color 400ms;
  &:hover {
    color: white;
    background-color: ${color.homeBtnColor};
  }

  &:active {
    color: white !important;
    background-color: ${color.homeBtnColor} !important;
    border-color: ${color.homeBtnColor} !important;
  }
  border-radius: 5px;
  padding: 10px;
  font-size: 0.8em;

  @media (min-width: 1200px) {
    padding: 15px 20px;
    font-size: 0.9em;
  }
`

const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

function Home() {
  return (
    <React.Fragment>
      <HomeSection>
        <Container className="container">
          <Title className=" animate__animated animate__fadeInUp animate__slow">
            Bienvenue au cabinet d'avocats
          </Title>
          <SubTitle className="animate__animated animate__fadeInUp animate__slow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>

          <Button className=" animate__animated animate__fadeInUp animate__slow">
            Consultation gratuite
          </Button>
        </Container>
        <Hover />
      </HomeSection>
    </React.Fragment>
  )
}

export default Home
