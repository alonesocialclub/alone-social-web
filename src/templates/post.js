import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../component/Layout';


class PostTemplate extends React.Component {

  render() {
    const post = this.props.data.markdownRemark
    const { 
      title,
      description,
      keywords = [],
      image = '/img/og.jpeg',
    } = post.frontmatter;
    const imageUrl = 'https://www.alone.social' + image;
    const meta = [
      {name: 'title', content: title},
      {name: 'description', content: description},
      {name: 'keywords', content: [keywords,title].join(',')},
      {name: 'image', content: imageUrl},
      {property: 'og:description', content: description},
      {property: 'og:title', content: title},
      {property: 'og:image', content: imageUrl},
    ]

    return (
      <Layout>
        <Helmet meta={meta}>
          <title>{title}</title>
        </Helmet>
      </Layout>
    )
  }
}

export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image
        username
        userProfileImage
        description
        keywords
        createdAt
        facebookUrl
      }
    }
  }
`
