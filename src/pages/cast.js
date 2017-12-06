import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';
import Paper from 'material-ui/Paper';
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
    <h2 css={{ margin: `0 0 12px 0`, padding: 0 }}>
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
    <h1 style={style.container} >Film Cast</h1>
    <div style={style.container}>
    <User
      username="Jane Doe"
      avatar="http://via.placeholder.com/150x150"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Bob Smith"
      avatar="http://via.placeholder.com/150x150"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    </div>

    </Paper>
  </Container>
)

export default SecondPage
