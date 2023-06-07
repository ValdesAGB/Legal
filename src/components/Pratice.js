import React from 'react'
import { praticeElements, separator, width } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Pratice() {
  const className = 'col-2 my-3'

  const PraticeSection = styled.section`
    margin: 100px 0 100px 0;
    @media (min-width: 2560px) {
      margin: 100px 20% 100px 20%;
    }
  `

  const HeadTitle = styled.h2`
    font-family: 'Merriweather', serif;
    color: #363636;
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
    text-transform: capitalize;
    padding-bottom: 0;
    @media (min-width: 320px) {
      font-size: 30px;
    }
  `

  const HeadText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #999999;
    line-height: 1.5em;
    margin: 25px 0 25px 0;
    font-size: 1.2em;

    @media (min-width: 360px) {
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 5%;
    }
    @media (min-width: 425px) {
      font-size: 1.2em;
      line-height: 28px;
      margin-bottom: 5%;
    }
    @media (min-width: ${width}px) {
      margin-bottom: 2%;
    }
  `

  const Icone = styled.i`
    color: #d8ae76;

    @media (min-width: 360px) {
      font-size: 2em;
    }
  `

  const ListItemsDiv = styled.div`
    padding: 1.5%;
  `

  const Title = styled.h4`
    font-family: 'Merriweather', serif;
    color: #363636;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 14px;
    text-transform: capitalize;
  `

  const Text = styled.p`
    opacity: 0.6;
    color: #777777;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 0;
    @media (min-width: 360px) {
      font-size: 14px;
    }

    @media (min-width: 425px) {
      font-size: 1em;
    }
  `

  return (
    <section>
      <PraticeSection className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xxl-6 row justify-content-center text-center">
          <Fade bottom>
            <HeadTitle>Practice Areas</HeadTitle>
          </Fade>
          <Fade bottom>
            <HeadText>
              Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
              tempor incidide labeore dolore magna.
            </HeadText>
          </Fade>
          {separator(className)}
        </div>
        <div className="row justify-content-md-center ">
          {praticeElements.map(({ id, img, title }) => (
            <ListItemsDiv
              className="col-12 col-lg-4 row my-4  align-items-top"
              key={id}
            >
              <Fade bottom>
                <div className="col-2 col-md-1 col-lg-2 me-lg-2">
                  <Icone className={img} />
                </div>
                <div className="col">
                  <Title>{title}</Title>
                  <Text>
                    Lorem ipsum dolor sit amet, conse adipise elit, sed eiusmod
                    tempor incidide.
                  </Text>
                </div>
              </Fade>
            </ListItemsDiv>
          ))}
        </div>
      </PraticeSection>
    </section>
  )
}

export default Pratice
