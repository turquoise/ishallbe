import React from 'react'
import Link from 'gatsby-link'
import IndexContainer from '../components/IndexContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import IndexList from './indexlist';
import LocationList from './locationlist';
import FilmingList from './filminglist';
import ScriptsList from './scriptslist';
import TagsList from './tagslist';
import Tags from './tags';
import '../layouts/index.css';

const style = {
  paper: {
    height: 220,
    width: '100%',
    marginTop: '2px',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
  },
  category: {
    width: '100%',
    marginTop: '2px',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#475b75',
    color: 'white',
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
    margin: 0,
  }

};


class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: 'all',
      tag: ''
    }
    
  }

  getData = (data) => {
    this.setState({
      category: 'all',
      tag: data,
    })
    
  }

  getPostList = () => {
    const postEdges = this.props.data.posts.edges;
    const locationEdges = this.props.data.location.edges;
    const scriptsEdges = this.props.data.scripts.edges;
    const filmingEdges = this.props.data.filming.edges;
    const tagsEdges = this.props.data.tags.edges;

    
    if (this.state.category === 'all') {
      return <IndexList postEdges={postEdges} />
    } else if (this.state.category === 'scripts' ) {
      return <ScriptsList scriptsEdges={scriptsEdges} />
    } else if (this.state.category === 'location' ) {
      return <LocationList locationEdges={locationEdges} />
    } else if (this.state.category === 'filming' ) {
      return <FilmingList filmingEdges={filmingEdges} />
    }

  }

  render() {
    
    //const postEdges = this.props.data.posts.edges;
    console.log('this.state.tag ', this.state.tag);
    
    console.log('this.props', this.props);
    
    return (
      <IndexContainer>
        <Grid>
        <h1 className="myheading" style={style.blog} >Blog</h1>
        {/*<h4>{data.allMarkdownRemark.totalCount} Posts</h4>*/}
        <Row>
          <Col xs={12} sm={12} md={10} lg={10}>
         
          {this.getPostList()}
           

          </Col>
          <Col xs={12} sm={12} md={2} lg={2}>
          <Paper style={style.category} zDepth={4}>
          <h4 className="myheading" style={style.categorydiv}>Categories:</h4>
          <div style={style.categorydiv}>
            <h5 onClick={ () => this.setState({ category: 'all', tag: ''}) }>All</h5>
            <h5 onClick={ () => this.setState({ category: 'scripts', tag: ''}) }>Scripts</h5>
            <h5 onClick={ () => this.setState({ category: 'location', tag: ''}) }>Location</h5>
            <h5 onClick={ () => this.setState({ category: 'filming', tag: ''}) }>Filming</h5>
            </div>
          </Paper>
          <br/>
          <div>
            {/*<h3>Tags</h3>
            <Tags getData={this.getData} tagsEdges={postEdges}/>*/}
          </div>
          </Col>
        </Row>
        
        </Grid>
      </IndexContainer>
    )
  }
}

export const query = graphql`
query IndexQuery($tag: [String!]) {
  posts: allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          category
          tags
          cover
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
  tags: allMarkdownRemark(filter: {frontmatter: {tags: {in: $tag}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          category
          tags
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


export default Blog
