import React from 'react'
import Link from 'gatsby-link'
//import Helmet from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Regina from  './assets/images/reginajonas.png';
//import './assets/css/index.css'
import './MyHeader.css';



const MyHeader = () => (
      <div className="container" >
        <div className="main">
        <Grid fluid >
        <Row>
          <Col xs={6} sm={6} md={8} lg={8} >
          <h1 className="heading">
            <Link to="/" className="Link" >
              I Shall Be
            </Link>
          </h1>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4}>  
            <div >
              <img className="img" src={Regina} alt="Regina Jonas" />
              <div >Regina Jonas</div>
            </div>
          </Col>
          </Row>
          </Grid>
        </div>
      </div>
    
    
)

export default MyHeader;