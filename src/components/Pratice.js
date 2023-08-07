import React from 'react'
import { praticeElements, separator } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { police } from '../untils/police'
import { color } from '../untils/colors'

const separatorClassName = 'col-2'

const PraticeSection = styled.section`
  margin: 100px 0 50px;
  @media (min-width: 1400px) {
    margin: 100px 0;
  }
`

const Container = styled.div`
  @media (max-width: 991px) {
    padding: 0;
  }
`

const HeadTitle = styled.h2`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-size: 30px;
  font-weight: 400;
  text-align: center;
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
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`

const PraticeContainer = styled.div`
  margin-top: 50px;
`

const Pratices = styled.div`
  margin-bottom: ${(props) => (props.ids === 'Technology' ? '0' : '50px')};
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
        <Container className="container">
          <div className="row justify-content-center">
            <div>
              <Fade bottom>
                <HeadTitle>Domaines d'Expertise</HeadTitle>
              </Fade>
              <Fade bottom>
                <div className="row justify-content-center">
                  <HeadText className="col-md-10 col-lg-8 ">
                    Lorem ipsum dolor amet, consectetur adipisice elite sede
                    eiusmod tempor incidide labeore dolore magna.
                  </HeadText>
                </div>
              </Fade>
              <div className="row justify-content-center">
                {separator(separatorClassName)}
              </div>
              <PraticeContainer className="row justify-content-center">
                {praticeElements.map(({ id, img, title }) => (
                  <Pratices className="col-12 col-sm-6 col-lg-4" key={id}>
                    <div className="row">
                      <Fade bottom>
                        <div className="col-2">
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
                  </Pratices>
                ))}
              </PraticeContainer>
            </div>
          </div>
        </Container>
      </PraticeSection>
    </section>
  )
}

export default Pratice
