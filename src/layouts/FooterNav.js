import React from 'react';
import Link from 'gatsby-link';

const styles = {
  content: {
    flex: '1 0 auto',
    padding: '20px'
  },
  footer: {
    padding: '20px',
    marginTop: '50px',
    height: '100px',
    color: 'white',
    background: '#43556e'
  },

}

class FooterNav extends React.Component {
  render() {
    return (
      <div>
        <footer style={styles.footer}>
        Copyright 2018 EuroArt Media Ltd
        </footer>
      </div>
    )
  }
}


export default FooterNav;
