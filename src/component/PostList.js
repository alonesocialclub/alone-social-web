import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PostListItem from './PostListItem'
import Logo from './Logo';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 480px;
  `

class PostList extends React.Component {
  render() { 
    return (
      <Wrapper>
        <Logo/>
        {this.props.markdownNodes.map(node => (
          <a
            key={node.id}
            href={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <PostListItem
              {...node.frontmatter}
            />
          </a>
        ))}
      </Wrapper>
    )
  }
}



PostList.propTypes = {
  markdownNodes: PropTypes.array,
}

export default PostList
