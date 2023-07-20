import React, { useEffect, useState } from 'react'
import { icone, navElements } from '../data'
import styled, { keyframes } from 'styled-components'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const slideDownAnimation = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const BeforeContainer = styled.div`
  padding: 0;
  margin-left: 0;
  margin-right: 0;
`

const Container = styled.div`
  padding: 0;
`

const Logo = styled.img`
  width: 100%;
`

const Button = styled.button`
  border-color: ${color.homeBtnColor};
  border-radius: 0;
  box-shadow: none;
  &:active {
    outline: none;
  }
`
const Icone = styled.i`
  color: ${color.homeBtnColor};
  font-size: 1.5em;
`

const Onglets = styled.div`
  background-color: ${color.countNumbersColor};
  margin-top: 10px;
  @media (min-width: 992px) {
    margin-top: 0;
    background-color: transparent;
  }
`

const List = styled.ul`
  padding-left: 10px;
`

const formatId = (id) => {
  return id.includes(' ') ? id.replace(/\s/g, '-') : id
}

function Header() {
  const [top, setTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      const isTop = window.scrollY === 0
      setTop(isTop ? true : false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const Section = styled.div`
    position: fixed;
    z-index: 5;
    background-color: ${top ? 'transparent' : 'white'};
    animation: ${slideDownAnimation} 1s ease-in-out;
    padding: 2% 0%;
    width: 100%;
  `

  const ListItems = styled.li`
    position: relative;
    margin-left: 2%;
    border-bottom: none;
    padding: 2px 0;

    @media (min-width: 992px) {
      position: relative;
      padding-bottom: 0.5%;
      border-bottom: ${(props) =>
        props.ids === 'home' ? `solid 4px ${top ? 'white' : 'black'}` : null};

      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: white;
        transition: width 300ms;
      }
      &:hover::after {
        width: ${(props) => (props.ids === 'home' ? 0 : '100%')};
        border-bottom: solid 4px ${top ? 'white' : 'black'};
      }
    }
  `

  const Link = styled.a`
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: ${police.second};
    color: white;
    &:focus {
      color: ${color.homeBtnColor};
    }

    @media (min-width: 992px) {
      color: ${top ? 'white' : 'black'};
      &:hover {
        color: ${color.homeBtnColor};
      }

      &:focus {
        color: ${color.homeBtnColor};
      }
    }
  `

  return (
    <React.Fragment>
      <Section className="row">
        <BeforeContainer>
          <Container className="container">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <Logo src={top ? icone.light : icone.dark} alt="logo" />
                </a>
                <Button
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar"
                  aria-controls="navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Icone className="bi bi-list" />
                </Button>
                <Onglets
                  className="collapse navbar-collapse row justify-content-end"
                  id="navbar"
                >
                  <List className="navbar-nav col-lg-11 col-xl-9 col-xxl-8">
                    {navElements.map(({ id, to }) => (
                      <ListItems
                        ids={formatId(id)}
                        className="nav-item"
                        key={formatId(id)}
                      >
                        <Link href={to} className="nav-link">
                          {id.toUpperCase()}
                        </Link>
                      </ListItems>
                    ))}
                  </List>
                </Onglets>
              </div>
            </nav>
          </Container>
        </BeforeContainer>
      </Section>
    </React.Fragment>
  )
}

export default Header
