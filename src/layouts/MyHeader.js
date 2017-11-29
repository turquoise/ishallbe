import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Regina from  './assets/images/reginajonas.png';
import './assets/css/index.css'

const styles = {
  container: {
    background: '#8c7156',
    marginBottom: '1.45rem'
  },
  main: {
    margin: '0 auto',
    maxWidth: 960,
    height: 220,
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
    color: 'white',
    textDecoration: 'none'
  },
  img: {
    width: '100%',
    height: 'auto'
  },
  imageContainer: {
    width: '100%',
    height: 'auto'
  },
  'imageContainer .after': {
    color: 'white',
    backgroundColor: 'gray'
  }
  
  
}



const MyHeader = () => (
      <div style={styles.container} >
        <div style={styles.main}>
        <Grid fluid>
        <Row>
          <Col xs={6} sm={6} md={8} lg={8} >
          <h1 style={styles.h1}>
            <Link to="/" style={styles.Link} >
              I Shall Be
            </Link>
          </h1>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>  
            <div >
              <img style={styles.img} src={Regina} alt="Regina Jonas" />
              <div style={styles.after}>Regina Jonas</div>
            </div>
          </Col>
          </Row>
          </Grid>
        </div>
      </div>
    
    
)

export default MyHeader;