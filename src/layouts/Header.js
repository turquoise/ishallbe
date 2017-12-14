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
  container: {
    background: '#17120c',
    
  },
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
    color: 'black'
  },
  Link: {
    color: '#aa8956',
    fontSize: '70px',
    textDecoration: 'none'
  },
  text: {
    color: '#aa8956',
    marginLeft: '20px',
    marginTop: '20px',
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
      <Row around="md" around="lg" >
        <Col xs={12} sm={12} md={6} lg={6} >
        <div style={mystyles.heading}>
          <h1 className="myheading" >
            <Link to="/" style={mystyles.Link} >
              I Shall Be
            </Link>
          </h1>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div style={mystyles.img}>
          <a href="http://ravblog.ccarnet.org/2014/08/reflections-rabbiner-regina-jonas-mission/" target="_blank">
            <img width="380px" src={Regina} alt="Regina Jonas" />
            </a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2}>
          <div style={mystyles.text} >
            <h3 className="myheading" >Regina Jonas (1902-1944)</h3>
            {/*<img width="200px" src={Paper} alt="Old Paper with a Pen"/>*/}
          </div>
        </Col>
        </Row>
      </Grid>
    </div>
  </div>
)

export default Header;
