import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blogsPagesElements } from '../../data'
import 'animate.css'
import { police } from '../../untils/police'
import { color } from '../../untils/colors'

const bgCover =
  'http://landing.zytheme.com/legal/assets/images/page-title/1.jpg'

const Section = styled.section``

const DivHeader = styled.div`
  background: url(${bgCover}) no-repeat center / cover;
  position: relative;
  text-align: center;
  color: white;
  padding: 150px 0 100px;

  @media (min-width: 768px) {
    padding: 150px 0;
  }

  @media (min-width: 1200px) {
    padding: 200px 0 150px;
  }

  .title {
    margin-bottom: 22px;
    font-family: ${police.main};
    font-size: 40px;

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
      color: ${color.homeBtnColor};
    }
  }
  h5 {
    font-size: 16px;
    font-weight: 400;
    span {
      color: ${color.homeBtnColor};
    }
  }
`

const DivContent = styled.div`
  position: relative;
  z-index: 2;
`

const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const BlogsElements = styled.div`
  background-color: ${color.aboutBgColor};
  padding-top: 10%;
  padding-bottom: 10%;
  @media (min-width: 768px) {
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const BlogContainer = styled.div`
  display: flex;
  @media (min-width: 576px) and (max-width: 767px) {
    justify-content: center;
  }
`

const Blog = styled.div`
  margin: ${(props) => (props.id !== '9' ? '5% 0 15% 0' : '5% 0 0 0')};

  @media (min-width: 576px) {
    margin: ${(props) => (props.id !== '9' ? '0 0 10% 0' : '0')};
  }

  @media (min-width: 768px) {
    margin: ${(props) => (props.id !== '9' ? '0 0 8% 0' : '0')};
  }
  @media (min-width: 1200px) {
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
  border-radius: 5px;
  transform: scale(0);
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
    transform: scale(0);
    transition: transform 0.8s 0.2s;
    ${ContentCover}:hover & {
      transform: scale(1);
    }
    &:hover {
      background-color: ${color.homeBtnColor};
      border: solid 1px ${color.homeBtnColor};
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
    color: ${color.homeBtnColor};
  }
`

const Date = styled.span`
  color: ${color.footerIconeColor};
  font-family: ${police.main};
  font-size: 12px;
  line-height: 1;
  margin-right: 3%;
`

const Comments = styled.span`
  color: ${color.footerIconeColor};
  font-family: ${police.main};
  font-size: 12px;
  line-height: 1;
`

const ReadMore = styled.button`
  color: ${color.footerIconeColor};
  padding-left: 0;
  margin-top: 10px;
  font-size: 0.9em;
  i {
    font-size: 0.6em;
  }
`

function BlogsPages() {
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
          <Hover />
        </DivHeader>

        <BlogsElements className="row">
          <div>
            <div className="container">
              <BlogContainer className="row">
                {blogsPagesElements.map(({ id, cover, title }) => (
                  <Blog
                    key={id}
                    id={id}
                    className="col-12 col-sm-10 col-md-6 col-lg-4"
                  >
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
              </BlogContainer>
            </div>
          </div>
        </BlogsElements>
      </Section>
    </React.Fragment>
  )
}

export default BlogsPages
