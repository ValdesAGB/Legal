import React from 'react'
import styled from 'styled-components'
import { networksElements } from '../data'
import { color } from '../untils/colors'

const Image = styled.img`
  margin-bottom: 20px;
`

const Paragraph = styled.p`
  color: ${color.countTitleColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 20px;
`

const IconeLink = styled.a`
  color: ${color.footerIconeColor};
  transition: color 800ms;
  &:hover {
    color: ${color.homeBtnColor};
  }
`
function APropos() {
  return (
    <React.Fragment>
      <Image
        src="http://landing.zytheme.com/legal/assets/images/logo/logo-light.png"
        alt="logo"
      />
      <Paragraph>
        Proin gravida nibh vel velit auctor aliquet anean lorem quis. bindum
        auctor, nisi elite conset ipsums sagtis id duis sed odio sit.
      </Paragraph>
      <span className="row">
        {networksElements.map(({ id, icone }) => (
          <IconeLink href="#" key={id} className="col-2">
            <i className={icone} />
          </IconeLink>
        ))}
      </span>
    </React.Fragment>
  )
}

export default APropos
