import React from 'react'
import styled from 'styled-components'
import { police } from '../../untils/police'
import { color } from '../../untils/colors'

const Section = styled.section`
  text-align: center;
  background-color: ${color.notFoundBgColor};
  padding: 60% 0;

  @media (min-width: 576px) {
    padding: 30% 0;
  }

  @media (min-width: 768px) {
    padding: 26% 0;
  }

  @media (min-width: 1200px) {
    padding: 18% 0;
  }

  h1 {
    font-family: ${police.main};
    color: black;
    font-weight: 700;
    font-size: 5em;
    letter-spacing: 20px;
  }
  h4 {
    font-family: ${police.main};
    color: black;
    opacity: 0.8;
  }
`

function NotFound() {
  return (
    <React.Fragment>
      <Section>
        <h1>404</h1>
        <h4>Not Found</h4>
      </Section>
    </React.Fragment>
  )
}

export default NotFound
