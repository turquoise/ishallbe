import React from 'react'
import Link from 'gatsby-link'
import IndexContainer from '../components/IndexContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import '../layouts/index.css';

const style = {
  paper: {
    height: 220,
    width: '100%',
    marginTop: '5px',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#e5d7b2',
  },
  text: {
    textAlign: 'left',
    marginLeft: '20px',
    marginTop: '5px',
  },
  heading: {
    marginTop: '5px',
    textAlign: 'left',
    marginLeft: '20px',
  },
  img: {
    width: '75%',
    height: 'auto',
    marginTop: '20px',
  },
  blog: {
    margin: 5,
  }

};


class IndexPage extends React.Component {
  render() {
    console.log('this.props ', this.props);
    return (
      <IndexContainer>
        <Grid>
        <h1 className="myheading" style={style.blog} >Blog</h1>
        {/*<h4>{data.allMarkdownRemark.totalCount} Posts</h4>*/}
        
     
        {
          this.props.data.allMarkdownRemark.edges.map( ({node}) => (

            <div key={node.id} >
            <Paper style={style.paper} zDepth={4}>
              <Row>
            
             
           
                  <Col xs={5} sm={5} md={5} lg={5}>
                  <Link to={node.fields.slug} css={{ textDecoration: 'none', color: 'inherit'}}>
                  <img style={style.img}  src={node.frontmatter.cover} />
                  </Link>
                  </Col>

                  <Col xs={7} sm={7} md={7} lg={7}>
                  <Link to={node.fields.slug} css={{ textDecoration: 'none', color: 'inherit'}}>
                  <h3 className="myheading" style={style.heading}>{node.frontmatter.title}</h3>
                  <div style={style.text}>{node.frontmatter.date}</div>
                  <p style={style.text} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  <FlatButton label="Read More" fullWidth={true}/>
                  </Link>

                  </Col>
                 
                  </Row>
              </Paper>
              
            </div>

          ))
        }
        
        
        
        </Grid>
      </IndexContainer>
    )
  }
}

export const query = graphql`
  query IndexQuery2 {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            cover
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
