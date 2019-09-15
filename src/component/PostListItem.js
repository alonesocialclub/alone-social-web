import React from 'react'
import styled from 'styled-components'
import hoverCss from './hoverCss'

const Wrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  ${hoverCss};
  background-image: url(${props => props.img});
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
  margin: 1rem 0;
`

const HeaderWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: red;
  display: flex;
`


const PostListItem = ({ 
  image,
  username,
  userProfileImage,
  description,
  keywords,
  createdAt,
  facebookUrl,
 }) => (
  <Wrapper img={image}>
    <HeaderWrapper>
      <div>
        {username}
        <img src={userProfileImage}/> 
      </div>
      {description}
      {keywords}
      {createdAt}
      {facebookUrl}
    </HeaderWrapper>
  </Wrapper>
)

export default PostListItem
