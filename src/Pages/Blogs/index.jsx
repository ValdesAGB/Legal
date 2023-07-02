import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blogsPagesElements } from '../../data'
import 'animate.css'

function BlogsPages() {
  const bgCover =
    'http://landing.zytheme.com/legal/assets/images/page-title/1.jpg'

  const Section = styled.section``

  const DivHeader = styled.div`
    background: url(${bgCover}) no-repeat center / cover;
    position: relative;
    text-align: center;
    color: white;
    @media (min-width: 320px) {
      padding: 50% 0 30% 0;
    }
    @media (min-width: 768px) {
      padding: 15% 0;
    }
    .title {
      margin-bottom: 22px;
      font-family: 'Merriweather', serif;
      @media (min-width: 320px) {
        font-size: 40px;
      }

      @media (min-width: 768px) {
        font-size: 60px;
      }
    }
    .home {
      color: white;
      line-height: 1;
      text-decoration: none;
      transition: color 600ms;
      &:hover {
        color: #d8ae76;
      }
    }
    h5 {
      font-size: 16px;
      font-weight: 400;
      span {
        color: #d8ae76;
      }
    }
  `

  const DivContent = styled.div`
    position: relative;
    z-index: 2;
  `

  const DivHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  `

  const BlogsElements = styled.div`
    padding-top: 10%;
    padding-bottom: 10%;
    background-color: #f9f9f9;
    @media (min-width: 768px) {
      padding-top: 5%;
      padding-bottom: 5%;
    }
  `

  const Blog = styled.div`
    @media (min-width: 320px) {
      margin: ${(props) => (props.id !== '9' ? '5% 0 15% 0' : '5% 0 0 0')};
    }
    @media (min-width: 768px) {
      margin: ${(props) => (props.id !== '9' ? '0 0 8% 0' : '0')};
    }
    @media (min-width: 1024px) {
      margin: ${(props) =>
        props.id === '1' || props.id === '2' || props.id === '3'
          ? '0'
          : '5% 0 0 0'};
    }
  `

  const ContentCover = styled.div`
    position: relative;
    margin-bottom: 5%;
  `

  const BlogHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: scale(0);
    border-radius: 5px;
    transition: transform 0.8s;
    ${ContentCover}:hover & {
      transform: scale(1);
    }
    div {
      color: white;
      font-size: 2em;
      border: white solid 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 75px;
      height: 75px;
      border-radius: 50px;
      transition: background-color 0.5s;
      &:hover {
        background-color: #d8ae76;
        border: solid 1px #d8ae76;
      }

      a {
        color: white;
      }
    }
  `

  const Title = styled.a`
    color: black;
    font-weight: 600;
    line-height: 22px;
    text-decoration: none;
    transition: color 500ms;
    &:hover {
      color: #d8ae76;
    }
  `

  const Date = styled.span`
    color: #888888;
    font-family: 'Merriweather', serif;
    font-size: 12px;
    line-height: 1;
    margin-right: 3%;
  `

  const Comments = styled.span`
    color: #888888;
    font-family: 'Merriweather', serif;
    font-size: 12px;
    line-height: 1;
  `

  const ReadMore = styled.button`
    color: #888888;
    padding-left: 0;
    margin-top: 10px;
    font-size: 0.9em;
    i {
      font-size: 0.6em;
    }
  `
  return (
    <React.Fragment>
      <Section>
        <DivHeader className="row">
          <DivContent className="">
            <h1 className="title animate__animated animate__fadeInDown animate__slow">
              Blog Standard
            </h1>
            <h5 className="animate__animated animate__fadeInUp animate__slow">
              <Link to="/" className="home">
                Home
              </Link>{' '}
              / <span>Blog Standard</span>
            </h5>
          </DivContent>
          <DivHover></DivHover>
        </DivHeader>

        <BlogsElements className="row">
          <div>
            <div className="container">
              <div className="row">
                {blogsPagesElements.map(({ id, cover, title }) => (
                  <Blog key={id} id={id} className="col-12 col-md-6 col-lg-4">
                    <ContentCover>
                      <img src={cover} alt={id} className="w-100" />
                      <BlogHover>
                        <div>
                          <a href="#">
                            <i className="bi bi-link-45deg" />
                          </a>
                        </div>
                      </BlogHover>
                    </ContentCover>
                    <div>
                      <div>
                        <Date>Jan 20, 2017</Date>
                        <Comments>
                          <i class="bi bi-chat"></i> 3 comments
                        </Comments>
                      </div>
                      <Title href="#">{title}</Title>
                    </div>
                    <ReadMore className="btn">
                      Read more <i className="bi bi-chevron-double-right" />
                    </ReadMore>
                  </Blog>
                ))}
              </div>
            </div>
          </div>
        </BlogsElements>
      </Section>
    </React.Fragment>
  )
}

export default BlogsPages
