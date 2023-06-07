import React, { useEffect, useRef, useState } from 'react'
import { countsElements, width } from '../data'
import styled from 'styled-components'

function Counts() {
  const AnimatedValue = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0)
    const valueRef = useRef(null)

    useEffect(() => {
      let animationFrame
      let startTimestamp

      const getAnimationDuration = () => {
        if (value < 5) return 1500 // 5 seconds
        return 1000 // 30 seconds
      }

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = timestamp - startTimestamp
        const duration = getAnimationDuration()

        let stepValue
        if (value < 5) {
          stepValue = parseFloat((value * (progress / duration)).toFixed(1))
        } else {
          stepValue = Math.round((value / duration) * progress)
        }

        if (stepValue <= value) {
          setDisplayValue(stepValue)
          animationFrame = requestAnimationFrame(step)
        } else {
          setDisplayValue(value)
        }
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrame = requestAnimationFrame(step)
          }
        })
      })

      observer.observe(valueRef.current)

      return () => {
        cancelAnimationFrame(animationFrame)
        observer.disconnect()
      }
    }, [value])

    return <Count ref={valueRef}>{displayValue}</Count>
  }

  const Section = styled.section``

  const DivContent = styled.div`
    position: relative;
  `

  const DivContentList = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 10px;

    @media (min-width: 320px) {
      top: -180px;
      padding: 20% 0 20% 0;
    }

    @media (min-width: 768px) {
      top: -150px;
      padding: 5% 0 5% 2%;
    }
    @media (min-width: 1024px) {
      top: -120px;
      padding: 5% 0 5% 2%;
    }

    @media (min-width: ${width}px) {
      top: -100px;
      padding: 1% 0 1% 2%;
    }
  `

  const Count = styled.div`
    color: #363636;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    line-height: 1;
    margin-bottom: 12px;

    @media (min-width: 320px) {
      font-size: 1.5em;
    }
    @media (min-width: 375px) {
      font-size: 2em;
    }
  `
  const Title = styled.div`
    color: #bdbdbd;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    line-height: 1;
    font-style: italic;
    text-transform: capitalize;
    @media (min-width: 320px) {
      font-size: 0.7em;
    }
    @media (min-width: 375px) {
      font-size: 1em;
    }
  `

  const Icone = styled.i`
    color: #d8ae76;

    @media (min-width: 320px) {
      font-size: 2em;
    }
    @media (min-width: 375px) {
      font-size: 3em;
    }
  `

  const List = styled.div`
    @media (min-width: 320px) {
      margin: 5% 0 5% 0;
    }
  `

  return (
    <React.Fragment>
      <Section>
        <DivContent className="container">
          <div className="row justify-content-center">
            <DivContentList className="row col-11 col-lg-12 ">
              {countsElements.map(({ id, icone, title, count }) => (
                <List
                  key={id}
                  className=" col-10 col-md-6 row  col-lg-3 justify-content-center align-items-center"
                >
                  <div className="col-4">
                    <Icone className={icone} />
                  </div>
                  <div className="col-8">
                    <AnimatedValue value={count} />
                    <Title>{title}</Title>
                  </div>
                </List>
              ))}
            </DivContentList>
          </div>
        </DivContent>
      </Section>
    </React.Fragment>
  )
}

export default Counts
