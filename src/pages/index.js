import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container';
import Paper from 'material-ui/Paper';

const style = {
  height: 140,
  width: 800,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
};


const IndexPage = ({ data }) => {
  console.log('data ', data);
  return (
    <Container>
      {/*<h2>Posts</h2>*/}
      {/*<h4>{data.allMarkdownRemark.totalCount} Posts</h4>*/}
      {
        data.allMarkdownRemark.edges.map( ({node}) => (

          <div key={node.id} >
          <Paper style={style} zDepth={4}>
          <Link to={node.fields.slug} css={{ textDecoration: 'none', color: 'inherit'}}>
              <h3>
                {node.frontmatter.title} {" "}
                <span>- {node.frontmatter.date}</span>
              </h3>
            </Link>
            </Paper>
          </div>

        ))
      }

    </Container>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
  `


export default IndexPage
