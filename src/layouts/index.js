import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import Nav from './Nav';
//import Panel from './Panel';
import Header from './Header';
//import FooterNav from './FooterNav';

const mystyles = {
  page: {
    background: '#aa8956',
    height: '200%',
  },
}

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider>
  <div style={mystyles.page}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'EuroArt Media' },
        { name: 'keywords', content: "'Regina Jonas', 'I Shall Be'" },
      ]}
    />
    <Nav />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>

  </div>
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
