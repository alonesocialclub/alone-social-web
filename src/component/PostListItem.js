import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import styled from 'styled-components'
import hoverCss from './hoverCss'

const Wrapper = styled.div`
  ${hoverCss};
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.15);

  background-color: white;
  border-radius: 15px;
  overflow: hidden;

  * {
    color: #212529;
  }
`

const Picture = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  padding: 1rem;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Profile = styled.div`
  align-items: center;
  font-size: 1rem;

  flex-shrink: 0;
  width: 45px;
  height: 45px;

  border-radius: 27.5px;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const DescriptionWrapper = styled.div`
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-start;
  margin-left: 1rem;
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.0;
  font-weight: bold;
  margin: 0;
  padding-top: 0.3rem;
  text-align: left;
`

const DesciprionTime = styled.span`
  display: block;
  font-size: 13px;
  color: #adb5bd;
  margin: 0;
`

const CallToAction = styled.div`
  margin-top: 1rem;

  a {
    display: block;
    padding: 4px 10px;

    border-radius: 6px;
    background-color: #228be6;

    color: white;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }
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
    <Wrapper>
      <Picture img={image} />
      <Content>
        <HeaderWrapper>
          <Profile img={userProfileImage} />
          <DescriptionWrapper>
            <Description>
              {description}
            </Description>
            <DesciprionTime>
              {' ' + timeAgo.format(new Date(createdAt), 'twitter')} ago
            </DesciprionTime>
          </DescriptionWrapper>
        </HeaderWrapper>
        <CallToAction>
          <a onClick={this.onClickGo}>Join</a>
        </CallToAction>
      </Content>
    </Wrapper>
  )
  }
}



export default PostListItem
