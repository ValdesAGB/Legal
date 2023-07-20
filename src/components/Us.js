import React from 'react'
import styled from 'styled-components'
import { separator, usElements } from '../data'

import { Fade } from 'react-reveal'
import { police } from '../untils/police'
import { color } from '../untils/colors'

const separatorClassName = 'col-3 mt-3 mt-md-0 col-md-2'
const bgCover =
  'http://landing.zytheme.com/legal/assets/images/background/bg-1.jpg'

const CoverContainer = styled.div`
  padding: 0;
`

const Cover = styled.div`
  background-image: url(${bgCover});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  @media (min-width: 992px) {
    height: 100%;
  }
`

const ContentDiv = styled.div`
  padding-top: 10%;
  padding-bottom: 10%;
`

const HeadTitle = styled.p`
  font-family: ${police.main};
  color: ${color.countNumbersColor};
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 10px;
  text-transform: capitalize;
  padding: 0;
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

const List = styled.div`
  margin-top: 5%;
`
const ListItemsDiv = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    padding: 0.5rem;
  }
  @media (min-width: 992px) {
    padding-right: 1rem;
  }
`

const Icone = styled.i`
  color: ${color.homeBtnColor};
  font-size: 2.5em;
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
`
function Us() {
  return (
    <section>
      <div className="row" id="why-us">
        <CoverContainer className="col-sm-12 col-lg-5">
          <Cover />
        </CoverContainer>
        <ContentDiv className="col-sm-12 col-lg-7 row justify-content-center">
          <div className="col-12 col-md-9 col-lg-11">
            <Fade bottom>
              <HeadTitle>Why Hire Us ?</HeadTitle>
            </Fade>
            <Fade bottom>
              <HeadText>
                Lorem ipsum dolor amet, consectetur adipisice elite sede eiusmod
                tempor incidide labeore dolore magna.
              </HeadText>
            </Fade>
            {separator(separatorClassName)}
            <List className="row">
              {usElements.map(({ id, icone, title }) => (
                <ListItemsDiv className="col-12 col-md-6" key={id}>
                  <Fade bottom>
                    <div className="mb-4">
                      <Icone className={icone} />
                    </div>
                    <div>
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
