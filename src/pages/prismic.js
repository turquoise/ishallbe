import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import PrismicList from './prismiclist';
import '../layouts/index.css';

const style = {
  height: 220,
  width: '100%',
  marginTop: '5px',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#e5d7b2',
  text: {
    textAlign: 'left',
    marginLeft: '20px',
    marginTop: '5px',
  },
  heading: {
    marginTop: '5px',
    textAlign: 'left',
    marginLeft: '20px',
  },
  img: {
    width: '85%',
    height: 'auto',
    marginTop: '20px',
  },
  blog: {
    margin: 5,
  }

};


class Prismic extends React.Component {

  render() {
    const postEdges = this.props.data.allPrismicDocument.edges;
    return (
      <div>
        <h1>Prismic CMS test</h1>
        <PrismicList postEdges={postEdges}/>
      </div>
    )

  }

}

export const query = graphql`
  query PrismicQuery {
    allPrismicDocument {
    edges {
      node {
        id
        data {
          title {
           	type
            text
          }
          body {
            type
            text
          }
        }
      }
    }
  }
  }
  `


export default Prismic
