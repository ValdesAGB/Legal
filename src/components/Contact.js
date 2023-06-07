import React from 'react'
import styled from 'styled-components'
import { separator } from '../data'
import Formulaire from './Formulaire'
import contact from '../assets/contact.png'
import { Fade } from 'react-reveal'

function Contact() {
  const DivSection = styled.section`
    background-color: #f9f9f9;
  `

  const HeadTitle = styled.p`
    font-family: 'Merriweather', serif;
    color: #363636;
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 10px;
    text-transform: capitalize;
  `

  const HeadText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #999999;
    line-height: 1.5em;
    font-size: 1.2em;
  `

  const ContentDiv = styled.div`
    @media (min-width: 320px) {
      padding: 80px 10px 90px 20px;
    }
    @media (min-width: 768px) {
      padding: 20% 10% 20% 10%;
    }
    @media (min-width: 320px) {
      padding: 5% 7% 5% 7%;
    }
    @media (min-width: 2560px) {
      padding: 10%;
    }
  `

  const Image = styled.img`
    max-width: 100%;
    height: 100%;
  `
  return (
    <React.Fragment>
      <DivSection>
        <div className="row">
          <ContentDiv className="col-12 col-lg  ">
            <div className="col-12 row justify-content-start ">
              <Fade bottom>
                <HeadTitle>Free Consultation</HeadTitle>
                <HeadText className="my-3">
                  Lorem ipsum dolor amet, consectetur adipisice elite sede
                  eiusmod tempor incidide labeore dolore magna.
                </HeadText>
              </Fade>
              {separator('col-2 ms-3  ')}
              <Fade bottom>
                <Formulaire />
              </Fade>
            </div>
          </ContentDiv>

          <div className="col-12 col-lg-5 p-0 ">
            <Image src={contact} alt="1" className="w-100" />
          </div>
        </div>
      </DivSection>
    </React.Fragment>
  )
}

export default Contact
