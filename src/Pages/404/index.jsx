import React from 'react'
import styled from 'styled-components'

function NotFound() {
  const Section = styled.section`
    text-align: center;
    background-color: rgba(216, 174, 118, 0.7);
    padding: 20% 0;
    @media (min-width: 320px) {
      padding: 60% 0;
    }
    @media (min-width: 768px) {
      padding: 30% 0;
    }
    @media (min-width: 1360px) {
      padding: 15% 0;
    }
    h1 {
      font-family: 'Merriweather', serif;
      color: black;
      font-weight: 700;
      font-size: 5em;
      letter-spacing: 20px;
    }
    h4 {
      font-family: 'Merriweather', serif;
      color: black;
      opacity: 0.8;
    }
  `
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
