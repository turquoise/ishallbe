import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';
//import styles from './pages.css';

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
    <h1>Hi from the second page</h1>
    

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

    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default SecondPage
