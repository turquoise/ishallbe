import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';
import Paper from 'material-ui/Paper';
import '../layouts/index.css';
//import styles from './pages.css';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  container: {
    marginTop: '20px',
    marginLeft: '30px',
    marginRight: '30px',

  }
};


const User = props =>
<div
  css={{
    display: `flex`,
    alignItems: `center`,
    margin: `0 auto 12px auto`,
    "&:last-child": { marginBottom: 0 }
  }}
>
  <img
    src={props.avatar}
    css={{ flex: `0 0 96px`, width: 96, height: 96, margin: 0 }}
    alt=""
  />
  <div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
    <h2 className="myheading"  css={{ margin: `0 0 12px 0`, padding: 0 }}>
      {props.username}
    </h2>
    <p css={{ margin: 0 }}>
      {props.excerpt}
    </p>
  </div>
</div>


const SecondPage = () => (
  <Container>
    <Paper style={style} zDepth={1}>
    <h1 className="myheading" style={style.container} >Film Cast</h1>
    <div style={style.container}>
    <User
      username="Name 1"
      avatar="https://via.placeholder.com/150x150"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ut dui vel malesuada. Duis ac massa arcu. Cras scelerisque ante est, sed tincidunt dui facilisis vitae. Vestibulum semper sem quis felis tempor, at ultrices turpis vehicula. Praesent ut dolor eleifend, elementum risus in, faucibus diam."
    />

    <User
      username="Name 2"
      avatar="https://via.placeholder.com/150x150"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ut dui vel malesuada. Duis ac massa arcu. Cras scelerisque ante est, sed tincidunt dui facilisis vitae. Vestibulum semper sem quis felis tempor, at ultrices turpis vehicula. Praesent ut dolor eleifend, elementum risus in, faucibus diam."
    />

    <User
      username="Name 3"
      avatar="https://via.placeholder.com/150x150"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ut dui vel malesuada. Duis ac massa arcu. Cras scelerisque ante est, sed tincidunt dui facilisis vitae. Vestibulum semper sem quis felis tempor, at ultrices turpis vehicula. Praesent ut dolor eleifend, elementum risus in, faucibus diam."
    />

    <User
      username="Name 4"
      avatar="https://via.placeholder.com/150x150"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ut dui vel malesuada. Duis ac massa arcu. Cras scelerisque ante est, sed tincidunt dui facilisis vitae. Vestibulum semper sem quis felis tempor, at ultrices turpis vehicula. Praesent ut dolor eleifend, elementum risus in, faucibus diam."
    />

    <User
      username="Name 5"
      avatar="https://via.placeholder.com/150x150"
      excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique ut dui vel malesuada. Duis ac massa arcu. Cras scelerisque ante est, sed tincidunt dui facilisis vitae. Vestibulum semper sem quis felis tempor, at ultrices turpis vehicula. Praesent ut dolor eleifend, elementum risus in, faucibus diam."
    />

    </div>

    </Paper>
  </Container>
)

export default SecondPage
