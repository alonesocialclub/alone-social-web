import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import styled from 'styled-components'
import hoverCss from './hoverCss'

const Wrapper = styled.div`
  ${hoverCss};
  margin: 3rem 0;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  content: "";
  display: block;
  padding-bottom: 100%;
  position: relative;
`

const HeaderWrapper = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 0.5rem;
`

const Profile = styled.div`
  align-items: center;
  font-size: 1rem;
  img {
    margin-bottom: 0;
    border-radius: 100%;
    padding: 0.25rem;
    min-width: 70px;
  }
  flex-basis: 20%;
`

const DescriptionWrapper = styled.div`
  flex-direction: column;
  padding: 1rem 0.5rem;
  width: 100%;
`

const Description = styled.p`
  font-size: 20px;
  line-height: 1.0;
  font-weight: bold;
  margin: 0;
  text-align: left;
`

const DesciprionTime = styled.span`
  font-size: 14px;
`

const CallToAction = styled.div`
  margin-top: 5px;
  text-align: right;
  font-weight: bold;
`

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

class PostListItem extends React.Component{
   
  onClickGo = (e) => {
    e.preventDefault();
    window.open(this.props.facebookUrl);
  }

  render(){
    const {
      image,
      username,
      userProfileImage,
      description,
      createdAt,
      facebookUrl,
    } = this.props;
  
  return (
    <Wrapper img={image}>
      <HeaderWrapper>
        <Profile>
          <img src={userProfileImage}/>
        </Profile>
        <DescriptionWrapper>
          <Description>
            {description}
            <DesciprionTime>
              {' ' + timeAgo.format(new Date(createdAt), 'twitter')} ago
            </DesciprionTime>
          </Description>
          <CallToAction>
            <span onClick={this.onClickGo}>I WANT TO GO</span>
          </CallToAction>
        </DescriptionWrapper>
      </HeaderWrapper>
    </Wrapper>
  )
  }
}



export default PostListItem
