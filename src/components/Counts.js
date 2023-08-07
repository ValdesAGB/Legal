import React, { useEffect, useRef, useState } from 'react'
import { countsElements } from '../data'
import styled from 'styled-components'
import { police } from '../untils/police'
import { color } from '../untils/colors'

const DivContent = styled.div`
  position: relative;
`

const ListContainer = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 10px;

  top: -180px;
  padding: 50px 0;

  @media (min-width: 768px) {
    top: -110px;
    padding: 35px 0;
  }
  @media (min-width: 992px) {
    top: -70px;
  }

  @media (min-width: 1200px) {
    top: -60px;
  }
`

const List = styled.div`
  margin-bottom: ${(props) => (props.ids === '4' ? '0' : '40px')};
  @media (min-width: 768px) {
    margin-bottom: ${(props) =>
      props.ids === '4' || props.ids === '3' ? '0' : '40px'};
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

const Count = styled.div`
  color: ${color.countNumbersColor};
  font-weight: 700;
  font-family: ${police.second};
  line-height: 1;
  margin-bottom: 10px;
  font-size: 1.3em;
  @media (min-width: 576px) {
    font-size: 1.5em;
  }
`
const Title = styled.div`
  color: ${color.countTitleColor};
  font-family: ${police.main};
  font-weight: 400;
  line-height: 1;
  font-style: italic;
  text-transform: capitalize;
  font-size: 0.85em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`

const IconeContainer = styled.div`
  text-align: center;
`

const Icone = styled.i`
  color: ${color.homeBtnColor};
  font-size: 2.5em;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`

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

  return (
    <React.Fragment>
      <section>
        <DivContent className="container">
          <div className="row justify-content-center">
            <ListContainer className="row col-10 col-sm-8 col-md-12">
              {countsElements.map(({ id, icone, title, count }) => (
                <List
                  key={id}
                  ids={id}
                  className="row  col-md-6 col-lg justify-content-center align-items-center"
                >
                  <IconeContainer className="col-4">
                    <Icone className={icone} />
                  </IconeContainer>
                  <div className="col">
                    <AnimatedValue value={count} />
                    <Title>{title}</Title>
                  </div>
                </List>
              ))}
            </ListContainer>
          </div>
        </DivContent>
      </section>
    </React.Fragment>
  )
}

export default Counts
