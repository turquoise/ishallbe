import React from 'react';
import Link from 'gatsby-link';
import Container from '../components/Container';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../layouts/index.css';
//import styles from './pages.css';

const style = {
  height: '100%',
  width: '100%',
  margin: 5,
  textAlign: 'left',
  display: 'inline-block',
  backgroundColor: 'white',
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
<Grid>
  <Row>
    <Col xs={12} sm={2} md={2} lg={2}>
    <img
      src={props.avatar}
      css={{ flex: `0 0 96px`, width: 96, height: 96, margin: 0 }}
      alt=""
    />
    </Col>
    <Col xs={12} sm={10} md={10} lg={10}>
        <div css={{ flex: 1, marginLeft: 8, padding: 2 }}>
        <h2 className="myheading"  css={{ margin: `0 0 12px 0`, padding: 0 }}>
          {props.username}
        </h2>
        <p css={{ margin: 0 }}>
          {props.excerpt}
        </p>
      </div>
      </Col>
    </Row>
  </Grid>
</div>


const SecondPage = () => (
  <Container>
    <Paper style={style} zDepth={4}>
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
