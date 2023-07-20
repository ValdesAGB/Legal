import React from 'react'
import { coordonnesElements } from '../data'
import styled from 'styled-components'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const MainTitle = styled.h3`
  color: ${color.main};
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  margin-bottom: 40px;
  font-family: ${police.main};
`
const Text = styled.span`
  color: ${color.countTitleColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
const Icone = styled.i`
  color: ${color.homeBtnColor};
  font-size: 19px;
  margin-right: 2%;
`

function Coordonnes() {
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
