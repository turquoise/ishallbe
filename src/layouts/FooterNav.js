import React from 'react';
import Link from 'gatsby-link';

const mystyles = {
  content: {
    flex: '1 0 auto',
    padding: '20px'
  },
  footer: {
    flex-shrink: 0,
    padding: '20px'
  },

}

class FooterNav extends React.Component {
  render() {
    return (
      <div>
        <div class="content">
        <h1>Sticky Footer with Flexbox</h1>

        </div>

        <footer class="footer">
        Footer
        </footer>
      </div>
    )
  }
}


export default FooterNav;
