import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      posts: this.props.data.posts.edges,
      filteredPosts: this.props.data.posts.edges,
    }
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value }, () => this.filterPosts())
  }

  filterPosts = () => {
    const { posts, searchTerm } = this.state

    const filteredPosts = posts.filter(post =>
      searchTerm.split(/\s+/).every(str => post.node.frontmatter.title.toLowerCase().includes(str.toLowerCase()))
    )

    this.setState({ filteredPosts })
  }

  render() {
    const { filteredPosts, searchTerm } = this.state
    const filterCount = filteredPosts.length
    const categories = this.props.data.categories.group

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Tech Blog`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div className="elevator">
              <h1>Hello all 🖖</h1>
              <p>I am passionate geek about sysadmin and DevOps !</p>
            </div>
          </div>
        </div>

        <div className="container front-page">
          <div className="category-container">
            {categories.map(category => (
              <Link
                to={`/categories/${category.fieldValue.toLowerCase()}`}
                className="category-filter"
                key={category.fieldValue}
              >
                {category.fieldValue}
              </Link>
            ))}
          </div>
          <label htmlFor="searchTerm">Filter posts</label>
          <div className="search-container">
            <input
              id="searchTerm"
              className="search"
              type="text"
              name="searchTerm"
              value={searchTerm}
              placeholder="Write here to filter..."
              onChange={this.handleChange}
            />
            <div className="filter-count">{filterCount}</div>
          </div>
          <PostListing postEdges={filteredPosts} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 180)
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
                  width: 50
                  height: 50
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
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
