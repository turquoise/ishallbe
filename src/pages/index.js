import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container';
import Paper from 'material-ui/Paper';

const style = {
  height: 160,
  width: '100%',
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  text: {
    textAlign: 'left',
    marginLeft: '20px',
  },
  heading: {
    marginTop: '5px',
    textAlign: 'left',
    marginLeft: '20px',
  }

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
              <h3 style={style.heading}>{node.frontmatter.title}</h3>
              <div style={style.text}>{node.frontmatter.date}</div>
              <p style={style.text} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              
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
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `


export default IndexPage
