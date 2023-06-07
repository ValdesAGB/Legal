import React from 'react'
import { Networks, expertedElements, separator } from '../data'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

function Experted() {
  const className = 'col-2 mb-5'

  const Div = styled.section`
    padding: 7% 0 5% 0;
    margin: 0 0 0 0;
    background-color: #f9f9f9;
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

    @media (min-width: 425px) {
      font-size: 2em;
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

  const Post = styled.h4`
    color: #999999;
    font-family: 'Merriweather', serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
    font-style: italic;
    text-transform: capitalize;
  `

  const Name = styled.h6`
    color: #363636;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
    text-transform: capitalize;
  `
  const DivImage = styled.div`
    position: relative;
  `

  const HoverImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(216, 174, 118, 0.9);
    opacity: 0;
    display: flex;
    margin: 4%;
    transition: opacity 800ms;

    &:hover {
      opacity: 1;
    }
  `

  const List = styled.ul`
    list-style: none;
    display: flex;
  `

  const Icone = styled.i`
    font-size: 1.5em;
    color: white;
    transition: color 500ms;

    &:hover {
      color: black;
    }
  `

  return (
    <section>
      <div className="row " id="team">
        <Div>
          <div className="container my-5 ">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-7 row justify-content-center text-center">
                <Fade bottom>
                  <HeadTitle>Experted Attorneys</HeadTitle>
                </Fade>
                <Fade bottom>
                  <HeadText>
                    Lorem ipsum dolor amet, consectetur adipisice elite sede
                    eiusmod tempor incidide labeore dolore magna.
                  </HeadText>
                </Fade>
                {separator(className)}
              </div>
              <div className="row justify-content-center">
                {expertedElements.map(({ id, cover, name, post }) => (
                  <div className="col-12 col-md px-md-3 mb-5 my-md-0" key={id}>
                    <Fade bottom>
                      <DivImage className="mb-3">
                        <img src={cover} alt={id} className="w-100" />
                        <HoverImage>
                          <List classNames=" text-center">
                            {Networks.map(({ id, icone }) => (
                              <li key={id} className="mx-3">
                                <a href="#" className="text-white">
                                  <Icone className={icone} />
                                </a>
                              </li>
                            ))}
                          </List>
                        </HoverImage>
                      </DivImage>
                      <div className="text-center">
                        <Name>{name}</Name>
                        <Post>{post}</Post>
                      </div>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Div>
      </div>
    </section>
  )
}

export default Experted
