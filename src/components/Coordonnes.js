import React from 'react'
import { coordonnesElements } from '../data'
import styled from 'styled-components'

function Coordonnes() {
  const MainTitle = styled.h3`
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    margin-bottom: 40px;
    font-family: 'Merriweather', serif;
  `
  const Text = styled.div`
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  `
  const Icone = styled.i`
    color: #d8ae76;
    font-size: 19px;
    margin-right: 2%;
  `
  return (
    <React.Fragment>
      <div>
        <MainTitle>Get In Touch</MainTitle>
        <div>
          {coordonnesElements.map(({ id, text, icone }) => (
            <div key={id} className="row mb-3 mb-lg-5">
              <Icone className={`${icone} col-1`} />
              <Text className="col">{text}</Text>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Coordonnes
