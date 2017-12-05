import React from 'react';
import Link from 'gatsby-link';
import TextField from 'material-ui/TextField';

import Container from '../components/Container';

// 


class Contact extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    const errorMessage = this.props.getErrorMessage();
    return (
      <Container>
        Contact

      </Container>

    )
  }
}

export default Contact
