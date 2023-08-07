import React from 'react'
import { Networks, expertedElements, separator } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const separatorClassName = 'col-2'

const ExpertedSection = styled.section`
  background-color: ${color.aboutBgColor};
  padding: 100px 0 50px;
  @media (min-width: 1200px) {
    padding: 100px 0;
  }
`

const HeadTitle = styled.h1`
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

const ExpertedContainer = styled.div`
  margin-top: 50px;
`

const TeamContainer = styled.div`
  margin-bottom: ${(props) => (props.ids === 'Financial' ? '0' : '3rem')};
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const CoverContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`

const HoverImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${color.expertedHoverImageBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: transform 0.8s;
  ${CoverContainer}:hover & {
    transform: scale(0.95);
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transform: translateY(150px);
  transition: transform 500ms 200ms;
  ${CoverContainer}:hover & {
    transform: translateY(0);
  }
`

const ListItems = styled.li`
  margin-right: 50%;

  a {
    color: white;
  }
`

const Icone = styled.i`
  font-size: 1.2em;
  color: white;
  transition: color 500ms;
  &:hover {
    color: black;
  }
`

const Identification = styled.div`
  text-align: center;
`

const Post = styled.h4`
  color: ${color.aboutTextColor};
  font-family: ${police.second};
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  font-style: italic;
  text-transform: capitalize;
`

const Name = styled.h6`
  color: ${color.countNumbersColor};
  font-family: ${police.second};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
  text-transform: capitalize;
`

function Experted() {
  return (
    <ExpertedSection id="team">
      <div className="container">
        <div className="row justify-content-center">
          <div>
            <Fade bottom>
              <HeadTitle>Experted Attorneys</HeadTitle>
            </Fade>
            <Fade bottom>
              <div className="row justify-content-center">
                <HeadText className="col-md-10 col-lg-8 ">
                  Lorem ipsum dolor amet, consectetur adipisice elite sede
                  eiusmod tempor incidide labeore dolore magna.
                </HeadText>
              </div>
            </Fade>
            <div className="row justify-content-center text-center">
              {separator(separatorClassName)}
            </div>
          </div>
          <ExpertedContainer className="row justify-content-center">
            {expertedElements.map(({ id, cover, name, post }) => (
              <TeamContainer className="col-12 col-sm-6 col-lg" key={id}>
                <Fade bottom>
                  <CoverContainer>
                    <img src={cover} alt={id} />
                    <HoverImage>
                      <List>
                        {Networks.map(({ id, icone }) => (
                          <ListItems key={id}>
                            <a href="#">
                              <Icone className={icone} />
                            </a>
                          </ListItems>
                        ))}
                      </List>
                    </HoverImage>
                  </CoverContainer>
                  <Identification>
                    <Name>{name}</Name>
                    <Post>{post}</Post>
                  </Identification>
                </Fade>
              </TeamContainer>
            ))}
          </ExpertedContainer>
        </div>
      </div>
    </ExpertedSection>
  )
}

export default Experted
