import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../component/Layout'
import PostList from '../component/PostList'
import Helmet from "react-helmet";

class IndexPage extends React.Component {

    render() {
        const title = 'Alone Social';
        const description = 'Work alone, together';
        const image = 'https://alone.social/img/logo.png';
        return (
            <Layout>
                <Helmet meta={
                    [
                        {name: 'title', content: title},
                        {property: 'og:title', content: title},
                        {name: 'description', content: description },
                        {property: 'og:description', content: description},
                        {name: 'image', content: image},
                        {property: 'og:image', content: image},
                    ]
                }/>
                <PostList
                    markdownNodes={this.props.data.allMarkdownRemark.edges.map(
                        ({node}) => node
                    )}
                />
            </Layout>
        )
    }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdAt] }
    )
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            image
            username
            userProfileImage
            description
            keywords
            createdAt
            facebookUrl
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

