import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import Regina from  './assets/images/reginajonas.png';
import './index.css';

const mystyles = {
  container: {
    background: '#957a5f',
    marginBottom: '1.45rem'
  },
  main: {
    margin: '0 auto',
    maxWidth: 960,
    height: 200,
    padding: '1.45rem 1.0875rem',
  },
  h1: {
    margin: 0
  },
  a: {
    textDecoration: 'none',
    color: 'black'
  },
  Link: {
    color: 'black',
    fontSize: '60px',
    textDecoration: 'none'
  },
  img: {
    width: '100%',
    height: 'auto'
  },
  
  
}

const Header = () => (
  <div style={mystyles.container} >
    <div style={mystyles.main}>
    <Grid>
      <Row>
        <Col xs={6} sm={6} md={6} lg={6} >
          <h1 className="myheading">
            <Link to="/" style={mystyles.Link} >
              I Shall Be
            </Link>
          </h1>
        </Col>
        <Col xs={6} sm={4} md={4} lg={4}>  
          <div style={mystyles.img}>
            <img width="240px" src={Regina} alt="Regina Jonas" />
          </div>
        </Col>
        <Col md={2} lg={2}>
          <h3 className="myheading">Regina Jonas (1902-1944)</h3>
        </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default Header;