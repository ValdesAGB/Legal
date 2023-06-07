import React, { useEffect, useState } from 'react'
import { navElements, width } from '../data'
import styled from 'styled-components'

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

  const Nav = styled.div`
    position: fixed;
    z-index: 5;
    background-color: ${top ? 'transparent' : 'white'};
    @media (min-width: 320px) {
      padding: 2% 0% 2% 0%;
    }
    @media (min-width: 1024px) {
      padding: 2% 1% 2% 5%;
    }
    @media (min-width: ${width}px) {
      padding: 2% 10% 2% 5%;
    }

    @media (min-width: 1440px) {
      padding: 2% 20% 2% 10%;
    }

    @media (min-width: 2560px) {
      padding: 2% 20% 2% 25%;
    }
  `

  const List = styled.ul`
    color: white;
    position: relative;

    @media (min-width: 320px) {
      left: 0%;
    }
    @media (min-width: 1024px) {
      left: 2%;
    }
    @media (min-width: ${width}px) {
      left: 20%;
    }
  `

  const ListItems = styled.li`
    position: relative;
    margin-left: 5%;
    @media (min-width: 320px) {
      border-bottom: none;
      padding-bottom: 0;
    }
    @media (min-width: 1024px) {
      border-bottom: ${(props) =>
        props.ids === 'home' ? `solid 4px ${top ? 'white' : 'black'}` : null};
      padding-bottom: 0.5%;
      position: relative;

      &:after {
        content: '';
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
    font-size: 0.8em;
    font-weight: 700;
    @media (min-width: 320px) {
      color: white;
      &:active {
        color: white;
      }
    }
    @media (min-width: 1024px) {
      color: ${top ? 'white' : 'black'};
      &:hover {
        color: ${top ? 'white' : 'black'};
      }

      &:focus {
        color: ${top ? 'white' : 'black'};
      }
    }
  `

  const Onglets = styled.div`
    background-color: #363636;
    @media (min-width: 1024px) {
      background-color: transparent;
    }
  `

  const Button = styled.button`
    border-color: #d8ae76;
    border-radius: 0;
    box-shadow: none;
    outline: none;
  `
  const Icone = styled.i`
    color: #d8ae76;
    font-size: 1.5em;
  `
  return (
    <React.Fragment>
      <Nav className="row w-100">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {top ? (
                <img
                  src="http://landing.zytheme.com/legal/assets/images/logo/logo-light.png"
                  alt="logo"
                  className="w-100"
                />
              ) : (
                <img
                  src="http://landing.zytheme.com/legal/assets/images/logo/logo-dark.png"
                  alt="logo"
                  className="w-100"
                />
              )}
            </a>
            <Button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Icone className="bi bi-list" />
            </Button>
            <Onglets
              className="collapse navbar-collapse row"
              id="navbarSupportedContent"
            >
              <List className="navbar-nav w-100">
                {navElements.map(({ id, href }) => (
                  <ListItems
                    ids={id.includes(' ') ? id.replace(/\s/g, '-') : id}
                    className="nav-item"
                    key={id.includes(' ') ? id.replace(/\s/g, '-') : id}
                  >
                    <Link
                      className={`nav-link `}
                      aria-current="page"
                      href={href === '' ? '#' : `#${href}`}
                    >
                      {id.toUpperCase()}
                    </Link>
                  </ListItems>
                ))}
              </List>
            </Onglets>
          </div>
        </nav>
      </Nav>
    </React.Fragment>
  )
}

export default Header
