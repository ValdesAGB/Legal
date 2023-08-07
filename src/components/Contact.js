import React from 'react'
import styled from 'styled-components'
import { separator } from '../data'
import Formulaire from './Formulaire'
import { Fade } from 'react-reveal'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const separatorClassName = 'col-3'
const bgCover =
  'http://landing.zytheme.com/legal/assets/images/background/bg-1.jpg'

const DivSection = styled.section`
  background-color: ${color.aboutBgColor};
`

const HeadTitle = styled.h2`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-size: 30px;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`

const HeadText = styled.p`
  font-family: ${police.second};
  font-weight: 400;
  color: ${color.aboutTextColor};
  margin: 5px 0 25px;
  font-size: 14px;
  line-height: 28px;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`

const Content = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`

const CoverContainer = styled.div`
  padding: 0;
`
const Cover = styled.div`
  background-image: url(${bgCover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  @media (min-width: 992px) {
    height: 100%;
  }
`

function Contact() {
  return (
    <React.Fragment>
      <DivSection>
        <div className="row">
          <Content className="col-sm-12 col-lg col-xxl-6 row justify-content-center ">
            <div className="col-12 col-md-9 col-lg-11">
              <div>
                <Fade bottom>
                  <HeadTitle>Consultation gratuite</HeadTitle>
                  <div className="row">
                    <HeadText className="col-md-10 col-lg-8 ">
                      Lorem ipsum dolor amet, consectetur adipisice elite sede
                      eiusmod tempor incidide labeore dolore magna.
                    </HeadText>
                  </div>
                </Fade>
                {separator(separatorClassName)}
                <Fade bottom>
                  <Formulaire />
                </Fade>
              </div>
            </div>
          </Content>

          <CoverContainer className="col-sm-12 col-lg-5 col-xxl-6">
            <Cover />
          </CoverContainer>
        </div>
      </DivSection>
    </React.Fragment>
  )
}

export default Contact
