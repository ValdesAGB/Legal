import React from 'react'
import styled from 'styled-components'
import { separator } from '../data'
import { Fade } from 'react-reveal'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const AboutSection = styled.section`
  background-color: ${color.aboutBgColor};
  padding-top: 300px;

  @media (min-width: 768px) {
    padding-top: 200px;
  }

  @media (min-width: 992px) {
    padding-top: 150px;
  }
`
const CoverContainer = styled.div`
  padding: 0;
`

const Cover = styled.img`
  width: 100%;
`

const ContentContainer = styled.div`
  padding: 0;
  margin-top: 50px;
`

const Title = styled.h1`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-weight: 400;
  margin-bottom: 0;
  text-transform: capitalize;
  padding-bottom: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
`
const separatorClassName = 'col-3 col-md-2 col-lg-5 col-xl-4'

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  color: ${color.aboutTextColor};
  font-family: ${police.second};
  margin-top: ${(props) => props.id === '1' && '30px'};
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
            <CoverContainer className="col-12 col-sm-8 col-lg-5">
              <Cover src={cover} alt="cover" />
            </CoverContainer>
            <ContentContainer className="col-12 col-lg offset-lg-1">
              <Fade bottom>
                <Title>À propos de notre cabinet</Title>
              </Fade>
              {separator(separatorClassName)}
              <Fade bottom>
                <Text id="1">
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
            </ContentContainer>
          </div>
        </div>
      </AboutSection>
    </React.Fragment>
  )
}

export default About
