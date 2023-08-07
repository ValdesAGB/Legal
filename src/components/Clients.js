import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { clientsElements } from '../data'
import styled from 'styled-components'
import { color } from '../untils/colors'

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
}

const ClientsSection = styled.section`
  padding: 15px 0 10px;
  background-color: ${color.homeBtnColor};
`

const CoverContainer = styled.div`
  padding: 0 100px;

  @media (min-width: 576px) {
    padding: 0 50px;
  }
  @media (min-width: 1200px) {
    padding: 0;
  }
`

const Cover = styled.img`
  cursor: pointer;
  width: 100%;
`

function Clients() {
  return (
    <React.Fragment>
      <ClientsSection>
        <div className="container">
          <div className="row " id="free-consultation">
            <Slider {...settings}>
              {clientsElements.map(({ id, cover, name }) => (
                <CoverContainer>
                  <Cover src={cover} alt={name} key={id} />
                </CoverContainer>
              ))}
            </Slider>
          </div>
        </div>
      </ClientsSection>
    </React.Fragment>
  )
}

export default Clients
