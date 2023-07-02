import React from 'react'
import { blogsPostsElements } from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Blogs() {
  const MainTitle = styled.h3`
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    text-transform: capitalize;
    margin-bottom: 40px;
    font-family: 'Merriweather', serif;
  `
  const Image = styled.img`
    border-radius: 5%;
  `
  const Title = styled(Link)`
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;
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
    font-size: 10px;
    line-height: 1;
    margin-right: 3%;
  `

  const Comments = styled.span`
    color: #888888;
    font-family: 'Merriweather', serif;
    font-size: 10px;
    line-height: 1;
  `
  return (
    <React.Fragment>
      <div>
        <MainTitle>Blog Posts</MainTitle>
        <div>
          {blogsPostsElements.map(({ id, cover, title, comments }) => (
            <div
              key={id}
              className="row align-items-center align-items-lg-start mb-4 mb-lg-3"
            >
              <div className="col-4 col-md-3">
                <Image src={cover} alt={id} />
              </div>
              <div className="col">
                <Title to="/blog">{title}</Title>
                <div>
                  <Date>Jan 20, 2017</Date>
                  <Comments>
                    <i className="bi bi-chat" /> {comments} comments
                  </Comments>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Blogs
