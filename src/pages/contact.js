import React from 'react';
import Link from 'gatsby-link';
import TextField from 'material-ui/TextField';

import Container from '../components/Container';

// https://medium.com/@gaperton/managing-state-and-forms-with-react-part-1-12eacb647112


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }

  onSubmit = (e) => {

  }

  render() {
    const { state } = this;
    
    return (
      <Container>
      <h1>Contact EuroArt Media</h1>
     
      <form onSubmit={this.onSubmit} action="https://formspree.io/monica.gosschalk@btinternet.com"
        method="POST">
        <label>
        <input 
            type="name" 
            placeholder="Your name"  
            name="_replyto" 
            value={state.name}
            onChange={ e => this.setState({ name: e.target.value })} />
        </label>
        <br /><br />
        <label>
          <input 
            type="email" 
            placeholder="Your email"  
            name="_replyto" 
            value={state.email}
            onChange={ e => this.setState({ email: e.target.value })} />
        </label>
        <br /><br />
        <button type="submit" value="Send" >Submit</button>
      </form>
    </Container>

    )
  }
}

export default Contact
