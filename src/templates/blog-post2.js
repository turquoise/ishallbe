import React from 'react'
import Link from 'gatsby-link';
import Container from '../components/Container';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import config from '../../data/SiteConfig';
import '../layouts/index.css';
import Img from 'gatsby-image';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  container: {
    marginTop: '20px',
    marginLeft: '40px',
    marginRight: '40px',
  }
};



export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <Paper style={style} zDepth={4}>
        <div style={style.container}>
          <Grid>
            <Row>
              <Col xs={12} sm={8} md={6} lg={6}>
                <h1 className="myheading">{post.frontmatter.title}</h1>
                <h2 className="myheading">By: {post.frontmatter.author}</h2>
                <p className="myheading">Date: {post.frontmatter.date}</p>
              </Col>
              <Col xs={12} sm={8} md={6} lg={6}>
                <Img sizes={post.frontmatter.cover.childImageSharp.sizes} />
              </Col>
            </Row>
            <Row>
            <Col>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link to="/">
            <FlatButton label="Back to Blog" fullWidth={true}/>
          </Link>
          </Col>
          </Row>
          </Grid>
        </div>
      </Paper>
    </Container>
  )
}


export const query = graphql`
  query BlogPostQuery2($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        author
        date
      }
    }
  }
`
