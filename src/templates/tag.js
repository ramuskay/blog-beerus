import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'

export default class TagTemplate extends Component {
  render() {
    const { tag } = this.props.pageContext
    const postEdges = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <Helmet title={`Posts tagged as "${tag}" – ${config.siteTitle}`} />
        <div className="container">
          <h1>
            Posts tagged as{' '}
            <u>
              <strong>{tag}</strong>
            </u>
          </h1>
          <PostListing postEdges={postEdges} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fileAbsolutePath], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fileAbsolutePath
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 150
                  height: 150
                  quality: 100
                  placeholder: BLURRED
                )
              }
              extension
              publicURL
            }
          }
        }
      }
    }
  }
`
