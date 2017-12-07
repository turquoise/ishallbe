import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import IndexList from './indexlist';
import LocationList from './locationlist';
import FilmingList from './filminglist';
import ScriptsList from './scriptslist';
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
  category: {
    width: '100%',
    marginTop: '5px',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: 'black',
    color: '#aa8956',
  },
  categorydiv: {
    marginTop: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
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

  constructor(props) {
    super(props);
    this.state = {
      category: 'all'
    }
    console.log('this.props from index ', this.props);
    
    
  }

  getPostList = () => {
    const postEdges = this.props.data.posts.edges;
    const locationEdges = this.props.data.location.edges;
    const scriptsEdges = this.props.data.scripts.edges;
    const filmingEdges = this.props.data.filming.edges;
    
    if (this.state.category === 'all') {
      return <IndexList postEdges={postEdges} />
    } 
    if (this.state.category === 'scripts') {
      return <ScriptsList scriptsEdges={scriptsEdges} />

    }
    if (this.state.category === 'location') {
      return <LocationList locationEdges={locationEdges} />
    }
    if (this.state.category === 'filming') {
      return <FilmingList filmingEdges={filmingEdges} />

    }
   

  }

  render() {
    
    console.log('this.state', this.state.category);
    
    
    return (
      <Container>
        <Grid>
        <h1 className="myheading" style={style.blog} >Blog</h1>
        {/*<h4>{data.allMarkdownRemark.totalCount} Posts</h4>*/}
        <Row>
          <Col xs={10} sm={10} md={10} lg={10}>
         
          {this.getPostList()}
           

          </Col>
          <Col xs={2} sm={2} md={2} lg={2}>
          <Paper style={style.category} zDepth={1}>
          <h4>Categories:</h4>
          <div style={style.categorydiv}>
            <h5 onClick={ () => this.setState({ category: 'all'}) }>All</h5>
            <h5 onClick={ () => this.setState({ category: 'scripts'}) }>Scripts</h5>
            <h5 onClick={ () => this.setState({ category: 'location'}) }>Location</h5>
            <h5 onClick={ () => this.setState({ category: 'filming'}) }>Filming</h5>
            </div>
          </Paper>
          </Col>
        </Row>
        
        </Grid>
      </Container>
    )
  }
}

export const query = graphql`
query IndexQuery {
  posts: allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          category
          cover
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
  location: allMarkdownRemark(filter: {frontmatter: {category: {eq: "location"}}}) {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          cover
          category
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }

  scripts: allMarkdownRemark(filter: {frontmatter: {category: {eq: "scripts"}}}) {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          cover
          category
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }

  filming: allMarkdownRemark(filter: {frontmatter: {category: {eq: "filming"}}}) {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          cover
          category
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
