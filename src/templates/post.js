import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../component/Layout';
import Logo from '../component/Logo';
import PostListItem from '../component/PostListItem'


class PostTemplate extends React.Component {

  getMeta = () => {
    const { 
      title,
      description,
      keywords = [],
      image,
    } = this.props.data.markdownRemark.frontmatter;
    const imageUrl = 'https://alone.social' + image;
    const meta = [
      {name: 'title', content: description},
      {property: 'og:title', content: description},
      {name: 'description', content: "Join now"},
      {property: 'og:description', content: "Join now"},
      {name: 'image', content: imageUrl},
      {property: 'og:image', content: imageUrl},
      {name: 'keywords', content: [keywords,title].join(',')},
    ]
    return meta;
  }
  render() {
    return (
      <Layout>
        <Helmet meta={this.getMeta()}/>
        <Logo/>
        <PostListItem
          {...this.props.data.markdownRemark.frontmatter}
        />
      </Layout>
    )
  }
}

export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
