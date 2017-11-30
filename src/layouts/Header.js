import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid'
import FlatButton from 'material-ui/FlatButton';
import Regina from  './assets/images/reginajonas2.png';
import './index.css';

const mystyles = {
  container: {
    background: '#030506',
    marginBottom: '1.45rem'
  },
  main: {
    margin: '0 auto',
    maxWidth: 960,
    height: 310,
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
    color: '#aa8956',
    fontSize: '70px',
    textDecoration: 'none'
  },
  text: {
    color: '#aa8956',
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
          <a href="http://ravblog.ccarnet.org/2014/08/reflections-rabbiner-regina-jonas-mission/" target="_blank">
            <img width="260px" src={Regina} alt="Regina Jonas" />
            </a>
          </div>
        </Col>
        <Col md={2} lg={2}>
          <div style={mystyles.text} >
          <h3 className="myheading" >Regina Jonas (1902-1944)</h3>
          </div>
        </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default Header;
