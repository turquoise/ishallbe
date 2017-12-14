import React from 'react'
import Link from 'gatsby-link'
import IndexContainer from '../components/IndexContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Header from '../layouts/Header';

import '../layouts/index.css';

const style = {
  height: '100%',
  width: '100%',
  paper: {
    height: 220,
    width: '100%',
    marginTop: '2px',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#e5d7b2',
  },
  category: {
    width: '100%',
    marginTop: '2px',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: 'black',
    color: '#aa8956',
  },
  categorydiv: {
    marginTop: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
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
    width: '75%',
    height: 'auto',
    marginTop: '20px',
  },
  blog: {
    margin: 0,
  }

};


class IndexPage extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    
    return (
      <div style={style}>
          <Header />
          
      </div>
    )
  }
}

// export const query = graphql`
// query IndexQuery($tag: [String!]) {
//   posts: allMarkdownRemark {
//     totalCount
//     edges {
//       node {
//         id
//         excerpt
//         frontmatter {
//           title
//           category
//           tags
//           cover
//           date(formatString: "DD MMMM, YYYY")
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }

// }
// `


export default IndexPage
