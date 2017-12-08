import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './index.css';
import Nav from './Nav';
import Panel from './Panel';
import FooterNav from './FooterNav';
import Header from './Header';
//import FooterNav from './FooterNav';

const mystyles = {
  page: {
    background: '#aa8956',
    height: '100%',
    width: '100%',
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
        maxWidth: 999,
        padding: '0px',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Panel />
    <FooterNav />

  </div>
  </MuiThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
