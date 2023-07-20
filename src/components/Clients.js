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
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
}

const DivSection = styled.section`
  padding: 2% 0;
  background-color: ${color.homeBtnColor};
`

const Cover = styled.img`
  width: 100%;
  cursor: pointer;
`

function Clients() {
  return (
    <React.Fragment>
      <DivSection>
        <div className="container">
          <div className="row " id="free-consultation">
            <Slider {...settings}>
              {clientsElements.map(({ id, cover, name }) => (
                <Cover src={cover} alt={name} key={id} />
              ))}
            </Slider>
          </div>
        </div>
      </DivSection>
    </React.Fragment>
  )
}

export default Clients
