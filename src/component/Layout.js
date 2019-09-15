import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/media'

const Warpper = styled.div`
  padding: 50px;
  transition: all 0.3s ease;
  ${media.mobile`padding: 30px 20px;`}
`
const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 480px;
`

class Layout extends React.Component {
  render() {;
    return (
        <Warpper>
          <Content>{this.props.children}</Content>
        </Warpper> 
    )
  }
}

export default Layout