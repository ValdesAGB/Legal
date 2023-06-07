import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { clientsElements, width } from '../data'
import styled from 'styled-components'

function Clients() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  }

  const DivSection = styled.section`
    padding: 2%;
    margin: 0 0 0 0;
    background-color: #d8ad76;
  `

  const SliderContainer = styled.div`
    @media (max-width: 320px) {
      padding-left: 10%;
    }
    @media (max-width: 425px) and (min-width: 375px) {
      padding-left: 15%;
    }
  `

  return (
    <React.Fragment>
      <DivSection>
        <div className="container">
          <SliderContainer className="row " id="free-consultation">
            <Slider {...settings}>
              {clientsElements.map(({ id, cover, name }) => (
                <div key={id} className="row justify-content-center ">
                  <div className="col-12 text-center">
                    <img src={cover} alt={name} />
                  </div>
                </div>
              ))}
            </Slider>
          </SliderContainer>
        </div>
      </DivSection>
    </React.Fragment>
  )
}

export default Clients
