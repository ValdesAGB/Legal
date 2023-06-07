import React from 'react'
import styled from 'styled-components'
import { feedbackElements, separator } from '../data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Fade } from 'react-reveal'

function Feedback() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  }

  const className = 'col-2 mb-5'

  const DivSection = styled.section`
    padding: 7% 0 5% 0;
    margin: 0 0 0 0;
    background-color: #f9f9f9;
    @media (min-width: 320px) {
      padding: 10% 0 5% 0;
    }
  `

  const HeadTitle = styled.h1`
    font-family: 'Merriweather', serif;
    color: #363636;
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
    text-transform: capitalize;
    padding-bottom: 0;
    @media (min-width: 320px) {
      font-size: 1.7em;
    }
  `

  const HeadText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: #999999;
    line-height: 1.5em;
    margin: 25px 0 25px 0;
    font-size: 1.2em;
  `

  const Paragraph = styled.p`
    color: #999999;
    font-family: 'Merriweather', serif;
    font-size: 1em;
    font-weight: 400;
    line-height: 2;
    margin-bottom: 5%;
    font-style: italic;
    text-transform: capitalize;
  `

  const Name = styled.h6`
    color: #363636;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1;
    text-transform: capitalize;
  `
  return (
    <React.Fragment>
      <DivSection id="feedback">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 row justify-content-center text-center">
              <Fade bottom>
                <HeadTitle>Clients Feedback</HeadTitle>
                <HeadText>
                  Lorem ipsum dolor amet, consectetur adipisice elite sede
                  eiusmod tempor incidide labeore dolore magna.
                </HeadText>
              </Fade>
              {separator(className)}
            </div>
            <div className="row text-center">
              <Slider {...settings}>
                {feedbackElements.map(({ id, cover, name }) => (
                  <div key={id} className="row justify-content-center ">
                    <div className="col-12 text-center">
                      <img src={cover} alt={name} className="m-auto mb-4" />
                    </div>

                    <div className="col-12">
                      <Paragraph>
                        “Legal represented me on a very serious matter where I
                        was looking at significant prison time. Immediately, I
                        knew that I was in good hands.”
                      </Paragraph>
                      <Name>- {name}</Name>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </DivSection>
    </React.Fragment>
  )
}

export default Feedback
