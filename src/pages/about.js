import React from 'react'
import Link from 'gatsby-link'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Container from '../components/Container';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  container: {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',
  },
  heading: {
    textAlign: 'center',
  },
  image: {
    display: 'block',
    margin: '0 auto',
  }
};


const About = () => (
  <Container>
    <Paper style={style} zDepth={1}>
    <Grid>
      <Row>
        <Col>
          <h1 style={style.container}>About EuroArt Media</h1>
          <div style={style.container}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at blandit ipsum, ac pretium lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent leo orci, efficitur a ex in, sollicitudin luctus odio. Pellentesque eget nulla massa. Pellentesque finibus varius blandit. Aenean ornare augue eu orci ultrices luctus. Sed luctus mi dui, et sagittis dui porttitor non. In congue sed orci ut tincidunt. Fusce arcu augue, iaculis eu sollicitudin nec, vestibulum at nulla. Aenean nec ultricies justo. Phasellus sed lacinia risus. Proin tincidunt facilisis urna, sit amet semper tellus tempor mattis. 
              </p>
          </div>
      </Col>
    </Row>
    <Row>
      <Col xs={6} sm={6} md={6} lg={6} >
        <div style={style.container}>
        <h2 style={style.heading}>Name 1</h2>
        <img style={style.image} src="http://via.placeholder.com/150x150" alt="name 1" />
        <br />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at blandit ipsum, ac pretium lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        
        </div>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <div style={style.container} >
        <h2 style={style.heading}>Name 2</h2>
        <img style={style.image} src="http://via.placeholder.com/150x150" alt="name 2" />
        <br />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at blandit ipsum, ac pretium lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
       
        </div>
      </Col>
    </Row>
    </Grid>
    
    </Paper>
  </Container>
)

export default About
