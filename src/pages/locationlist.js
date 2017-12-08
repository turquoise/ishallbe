import React from "react";
import Link from "gatsby-link";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const style = {
  paper: {
    height: 240,
    width: '100%',
    marginTop: '5px',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#e5d7b2',
  },
  text: {
    textAlign: 'left',
    marginLeft: '10px',
    marginTop: '5px',
    marginRight: '10px',
  },
  heading: {
    marginTop: '5px',
    textAlign: 'left',
    marginLeft: '20px',
  },
  img: {
    width: '70%',
    height: 'auto',
    marginTop: '20px',
  },
  blog: {
    margin: 5,
  }

};


class LocationList extends React.Component {

  getPostList() {
    const postList = [];
    if (this.props.locationEdges) {
      this.props.locationEdges.forEach(postEdge => {
        postList.push({
          title: postEdge.node.frontmatter.title,
          cover: postEdge.node.frontmatter.cover,
          date: postEdge.node.frontmatter.date,
          excerpt: postEdge.node.excerpt,
          slug: postEdge.node.fields.slug,
          category: postEdge.node.frontmatter.category,
        });
      });
    }
    
    return postList;
  }

    
  render() {
    const postList = this.getPostList();
    //console.log('location postList ', postList);
    return (
      <div>
        <Grid>
          
        { 
            
          postList.map( (post, index) => (
            

            <div key={index} >
            <Paper style={style.paper} zDepth={4}>
            <Row>
            
            
                  <Col xs={4} sm={4} md={4} lg={4}>
                  <Link to={post.slug} css={{ textDecoration: 'none', color: 'inherit'}}>
                  <img style={style.img}  src={post.cover} />
                  <FlatButton label="Read More" fullWidth={true}/>
                  </Link>
                  </Col>

                  <Col xs={8} sm={8} md={8} lg={8}>
                  <Link to={post.slug} css={{ textDecoration: 'none', color: 'inherit'}}>
                  <h3 className="myheading" style={style.heading}>{post.title}</h3>
                  <div style={style.text}>{post.date}</div>
                  <div style={style.text}>Category: {post.category}</div>
                  <p style={style.text} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                  
                  </Link>
                  </Col>
                  </Row>
              </Paper>
              
            </div>

          ))
          
        }
        </Grid>
      </div>
    );
  }
}

export default LocationList;
