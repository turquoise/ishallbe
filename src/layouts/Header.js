import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Regina from  './assets/images/reginajonas.png';
import './assets/css/index.css'

const styles = {
  container: {
    background: '#997f5e',
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
    color: 'white',
    textDecoration: 'none'
  },
  img: {
    height: 200,
  }
}

const Header = () => (
  <div style={styles.container} >
    <div style={styles.main}>
      <h1 style={styles.h1}>
        <Link to="/" style={styles.Link} >
          I Shall Be
        </Link>
      </h1>
      <img style={styles.img} src={Regina} alt="Regina Jonas" />
    </div>
  </div>
)

export default Header;