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

  padding-top: 50%;
  padding-bottom: 80%;

  @media (min-width: 576px) {
    padding-top: 40%;
    padding-bottom: 70%;
  }
  @media (min-width: 768px) {
    padding-top: 20%;
    padding-bottom: 35%;
  }

  @media (min-width: 992px) {
    padding-bottom: 25%;
  }

  @media (min-width: 1200px) {
    padding-bottom: 15%;
  }
  @media (min-width: 1400px) {
    padding-top: 15%;
  }
`

const Title = styled.h1`
  color: ${color.main};
  font-family: ${police.main};
  margin-bottom: 20px;
  text-transform: capitalize;

  font-size: 1.5em;
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
  margin-bottom: 47px;
  margin-top: 10px;

  font-size: 0.9em;
  font-weight: 400;

  @media (min-width: 1200px) {
    font-size: 1.5em;
    line-height: 1.5;
  }
`

const Button = styled.button`
  color: ${color.homeBtnColor};
  background-color: transparent;
  border-color: ${color.homeBtnColor};
  font-family: ${police.second};
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
  transition: color 500ms 200ms, background-color 400ms;
  &:hover {
    color: white;
    background-color: ${color.homeBtnColor};
  }
`
const DivContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`
const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

function Home() {
  return (
    <React.Fragment>
      <HomeSection className="">
        <DivContent className="row justify-content-center">
          <div className="col-12 col-md-10 col-xxl-8 row justify-content-center">
            <Title className=" animate__animated animate__fadeInUp animate__slow">
              Welcome To Legal Firm
            </Title>
            <SubTitle className="col-md-9 col-lg-10 col-xxl-12  animate__animated animate__fadeInUp animate__slow">
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
