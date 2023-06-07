import React from 'react'
import styled from 'styled-components'
import { separator, usElements, width } from '../data'
import law from '../assets/law.png'
import { Fade } from 'react-reveal'
function Us() {
  const HeadTitle = styled.p`
    font-family: 'Merriweather', serif;
    color: #363636;
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 10px;
    text-transform: capitalize;
    padding: 0;
    @media (min-width: 320px) {
      font-size: 1.7em;
    }
  `

  const HeadText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #999999;
    line-height: 1.5em;
    font-size: 1.2em;
    padding: 0;
  `
  const Icone = styled.i`
    color: #d8ae76;
    @media (min-width: 320px) {
      font-size: 2.5em;
    }
    @media (min-width: 375px) {
      font-size: 3em;
    }
    @media (min-width: 768px) {
      font-size: 2.5em;
    }
  `
  const List = styled.div`
    margin-top: 5%;
  `
  const ListItemsDiv = styled.div`
    padding: 0;
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
  `
  const ContentDiv = styled.div`
    padding: 120px 10px 90px 120px;
    @media (min-width: 320px) {
      padding: 10% 0 90px 20%;
    }
    @media (min-width: 375px) {
      padding: 10% 0 90px 15%;
    }
    @media (min-width: 425px) {
      padding: 10% 0 90px 10%;
    }
    @media (min-width: 1024px) {
      padding: 120px 10px 90px 120px;
    }
    @media (min-width: ${width}px) {
      padding: 120px 10px 90px 100px;
    }
    @media (min-width: 2560px) {
      padding: 10% 10px 90px 100px;
    }
  `

  const Image = styled.img`
    width: 100%;
    height: 100%;
  `

  return (
    <section>
      <div className="row " id="why-us">
        <div className="col-12 col-lg-5 p-0">
          <Image src={law} alt="1" />
        </div>
        <ContentDiv className="col-12 col-lg  ">
          <div className="col-12 row justify-content-start ">
            <Fade bottom>
              <HeadTitle>Why Hire Us ?</HeadTitle>
            </Fade>
            <Fade bottom>
              <HeadText className="my-3">
                Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
                tempor incidide labeore dolore magna.
              </HeadText>
            </Fade>
            {separator('col-3 mt-3 ms-lg-3 mt-md-0 col-md-2 ')}
            <List className="row">
              {usElements.map(({ id, icone, title }) => (
                <ListItemsDiv
                  className="col-12 col-md-6 p-md-2 pe-lg-3  my-4"
                  key={id}
                >
                  <Fade bottom>
                    <div className="mb-4">
                      <Icone className={icone} />
                    </div>
                    <div className="">
                      <Title>{title}</Title>
                      <Text>
                        Lorem ipsum dolor sit amet, conse adipise elit, sed
                        eiusmod tempor incidide.
                      </Text>
                    </div>
                  </Fade>
                </ListItemsDiv>
              ))}
            </List>
          </div>
        </ContentDiv>
      </div>
    </section>
  )
}

export default Us
