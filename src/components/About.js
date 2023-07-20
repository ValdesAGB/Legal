import React from 'react'
import styled from 'styled-components'
import { separator } from '../data'
import { Fade } from 'react-reveal'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const AboutSection = styled.section`
  background-color: ${color.aboutBgColor};
  padding-top: 100%;

  @media (min-width: 768px) {
    padding-top: 40%;
  }

  @media (min-width: 992px) {
    padding-top: 20%;
  }

  @media (min-width: 1200px) {
    padding-top: 15%;
  }
`
const Title = styled.h1`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0;
  text-transform: capitalize;
  padding-bottom: 0;
  font-size: 1.7em;
`
const separatorClassName = 'col-3 col-md-1 my-5'

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 20px;
  color: ${color.aboutTextColor};
  font-family: ${police.second};
`

const cover = 'http://landing.zytheme.com/legal/assets/images/team/team-4.png'

const signature =
  'http://landing.zytheme.com/legal/assets/images/background/signture.png'

function About() {
  return (
    <React.Fragment>
      <AboutSection id="about">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-5 mb-3 mb-lg-0">
              <img src={cover} alt="cover" className="w-100" />
            </div>
            <div className="col-12 col-lg my-5 my-lg-0 offset-lg-1 p-0">
              <Fade bottom>
                <Title>About Our Firm</Title>
              </Fade>
              {separator(separatorClassName)}
              <Fade bottom>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sede
                  do eiusmod tempor incididunt ut labore dolore magna aliqa Ut
                  enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </Fade>

              <Fade bottom>
                <Text>
                  Euis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupida.
                </Text>
              </Fade>
              <div className="row my-5 my-md-0" id="feature">
                <div className="col-5 col-md-2 col-lg-3 row justify-content-end ">
                  <Fade bottom>
                    <img src={signature} alt="signature" className="w-100" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutSection>
    </React.Fragment>
  )
}

export default About
