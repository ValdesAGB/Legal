import React from 'react'
import { blogsPostsElements } from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color } from '../untils/colors'
import { police } from '../untils/police'

const MainTitle = styled.h3`
  color: ${color.main};
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  text-transform: capitalize;
  margin-bottom: 40px;
  font-family: ${police.main};
`

const Title = styled(Link)`
  color: ${color.countTitleColor};
  font-size: 14px;
  font-weight: 400;
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
  font-size: 10px;
  line-height: 1;
  margin-right: 3%;
`

const Comments = styled.span`
  color: ${color.footerIconeColor};
  font-family: ${police.main};
  font-size: 10px;
  line-height: 1;
`

const Content = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    margin-bottom: 0.75rem;
  }
`

const Image = styled.img`
  border-radius: 5%;
`

function Blogs() {
  return (
    <React.Fragment>
      <div>
        <MainTitle>Blog Posts</MainTitle>
        <div>
          {blogsPostsElements.map(({ id, cover, title, comments }) => (
            <Content
              key={id}
              className="row align-items-center align-items-lg-start"
            >
              <div className="col-4 col-sm-2  col-md-3">
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
            </Content>
          ))}
          <div></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Blogs
