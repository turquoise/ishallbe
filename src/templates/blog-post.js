import React from 'react'
import Link from 'gatsby-link';
import Container from '../components/Container';
import Paper from 'material-ui/Paper';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
};



export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <Paper style={style} zDepth={4}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Go back to the homepage</Link>
      </Paper>
    </Container>
  )
}


export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`
