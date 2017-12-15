import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import Regina from  './assets/images/reginajonas2.png';
//import Paper from './assets/images/paper.png';
import './index.css';

const mystyles = {
  main: {
    margin: 0,
    maxWidth:  '999px',
    height: '700px',
  },
  heading: {
    marginLeft: '20px',
    marginTop: '20px',
  },
  a: {
    textDecoration: 'none',
  },
  Link: {
    color: 'white',
    fontSize: '70px',
    textDecoration: 'none',
  },
  text: {
    color: 'white',
    marginLeft: '20px',
    marginTop: '20px',
  },
  img: {
    width: '100%',
    height: 'auto'
  },
  button: {
    width: '200px',
    height: '60px',
    border: '2px solid white',
    fontSize: '20px',
    color: 'white',
    borderRadius: '40px',
    paddingTop: '15px',
    paddingLeft: '20px',
    
  },
  


}

const Header = () => (
  <div className="header" >
    <div style={mystyles.main}>
    <Grid>
      <Row around="md" around="lg" >
        <Col  xs={12}  sm={12} mdOffset={4} md={8} lgOffset={6} lg={6} >
        <div style={mystyles.heading}>
          <h1 className="myheading" >
            <Link to="/" style={mystyles.Link} >
              I Shall Be
            </Link>
          </h1>
          </div>
        </Col>
        </Row>
        <Row>
        <Col xs={12} sm={12} mdOffset={4} md={8} lgOffset={6} lg={6}>
          <div style={mystyles.text} >
            <h3 className="myheading" >Regina Jonas (1902-1944)</h3>
            {/*<img width="200px" src={Paper} alt="Old Paper with a Pen"/>*/}
          </div>
        </Col>
        </Row>
        <Row >
          <Col xs={12} smOffset={4} sm={8} mdOffset={6} md={6} lgOffset={7} lg={5}>
          <br/><br/>
          <Link to="/blog/" style={mystyles.a} >
            <div style={mystyles.button} className="myheading">
              Read the Blog
            </div>
            </Link>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default Header;
