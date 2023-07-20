import React from 'react'
import styled from 'styled-components'
import { feedbackElements, separator } from '../data'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Fade } from 'react-reveal'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

const separatorClassName = 'col-2 mb-5'

const DivSection = styled.section`
  background-color: ${color.aboutBgColor};
  padding: 20% 0;
  @media (min-width: 768px) {
    padding: 10% 0;
  }
`

const HeadContainer = styled.div`
  text-align: center;
`

const HeadTitle = styled.h2`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  @media (min-width: 768px) {
    font-size: 36px;
  }
`

const HeadText = styled.p`
  font-family: ${police.second};
  font-weight: 400;
  color: ${color.aboutTextColor};
  margin: 25px 0;
  font-size: 14px;
  line-height: 28px;

  @media (min-width: 768px) {
    font-size: 1.2em;
    line-height: 28px;
    margin-bottom: 5%;
  }

  @media (min-width: 1200px) {
    margin-bottom: 2%;
  }
`

const ContentContainer = styled.div`
  text-align: center;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
`

const SliderContent = styled.div`
  padding: 0 5%;
`

const Cover = styled.img`
  margin: auto auto 1rem auto;
`

const Paragraph = styled.p`
  color: ${color.aboutTextColor};
  font-family: ${police.main};
  font-size: 1em;
  font-weight: 400;
  line-height: 2;
  margin-bottom: 5%;
  font-style: italic;
  text-transform: capitalize;
`

const Name = styled.h6`
  color: ${color.countNumbersColor};
  font-family: ${police.second};
  font-size: 0.9em;
  font-weight: 700;
  line-height: 1;
  text-transform: capitalize;
`

function Feedback() {
  return (
    <React.Fragment>
      <DivSection id="feedback">
        <div className="container">
          <div className="row justify-content-center">
            <HeadContainer className="col-12 col-lg-6 row justify-content-center ">
              <Fade bottom>
                <HeadTitle>Clients Feedback</HeadTitle>
                <HeadText>
                  Lorem ipsum dolor amet, consectetur adipisice elite sede
                  eiusmod tempor incidide labeore dolore magna.
                </HeadText>
              </Fade>
              {separator(separatorClassName)}
            </HeadContainer>
            <ContentContainer>
              <Slider {...settings}>
                {feedbackElements.map(({ id, cover, name }) => (
                  <SliderContent key={id}>
                    <Cover src={cover} alt={name} />

                    <Paragraph>
                      “Legal represented me on a very serious matter where I was
                      looking at significant prison time. Immediately, I knew
                      that I was in good hands.”
                    </Paragraph>
                    <Name>- {name}</Name>
                  </SliderContent>
                ))}
              </Slider>
            </ContentContainer>
          </div>
        </div>
      </DivSection>
    </React.Fragment>
  )
}

export default Feedback
