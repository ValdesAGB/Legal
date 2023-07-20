import React from 'react'
import { praticeElements, separator } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { police } from '../untils/police'
import { color } from '../untils/colors'

const separatorClassName = 'col-2 my-3'

const PraticeSection = styled.section`
  margin: 100px 0;
  @media (min-width: 1400px) {
    margin: 100px 0;
  }
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

const Icone = styled.i`
  color: ${color.homeBtnColor};
  font-size: 2em;
`

const Title = styled.h4`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 14px;
  text-transform: capitalize;
`

const Text = styled.p`
  opacity: 0.6;
  color: ${color.praticeTextColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 1em;
  }
`

function Pratice() {
  return (
    <section>
      <PraticeSection>
        <div className="container p-0">
          <div>
            <div className="row justify-content-center">
              <div className="row col-12 col-lg-8 col-xxl-6 justify-content-center text-center">
                <Fade bottom>
                  <HeadTitle>Practice Areas</HeadTitle>
                </Fade>
                <Fade bottom>
                  <HeadText>
                    Lorem ipsum dolor amet, consectetur adipisice elite sede
                    eiusmod tempor incidide labeore dolore magna.
                  </HeadText>
                </Fade>
                {separator(separatorClassName)}
              </div>
              <div className="row justify-content-md-center">
                {praticeElements.map(({ id, img, title }) => (
                  <div
                    className="row col-12 col-lg-4 my-4 align-items-top"
                    key={id}
                  >
                    <Fade bottom>
                      <div className="col-2 col-md-1 col-lg-2 me-lg-2">
                        <Icone className={img} />
                      </div>
                      <div className="col">
                        <Title>{title}</Title>
                        <Text>
                          Lorem ipsum dolor sit amet, conse adipise elit, sed
                          eiusmod tempor incidide.
                        </Text>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PraticeSection>
    </section>
  )
}

export default Pratice
