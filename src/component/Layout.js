import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/media'

const Content = styled.div`
  padding: 120px 50px;
  transition: all 0.3s ease;
  ${media.mobile`padding: 120px 20px;`}
`

class Layout extends React.Component {
  render() {;
    return (
        <Content>
          {this.props.children}
        </Content> 
    )
  }
}

export default Layout