import React from "react";
import Link from "gatsby-link";

// https://gist.github.com/sebkouba/a5ac75153ef8d8827b98

class TagsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: ''
    }
  }

  changeTag = (tag) => {
    this.setState({
      tag: tag
    })
    this.props.getData(this.state.tag);
    
  }

  getTagsList() {
    let tagsList = [];
    if (this.props.tagsEdges) {
      this.props.tagsEdges.map( (tagsEdge) => {
        tagsList.push(tagsEdge.node.frontmatter.tags)
      })
      let newArr = [];
      // flatten the array
      for (var i = 0; i < tagsList.length; i++) {
        newArr = newArr.concat(tagsList[i]);
      }
      tagsList = newArr
      // make sure there are no duplicates
      tagsList = tagsList.filter( (value, index, array) => {
        return array.indexOf (value) == index;
      })
    }
    
    return tagsList;
  }

  render() {
    const tagsList = this.getTagsList();
    //console.log('tagsList ', tagsList);
    //console.log('tags this.props ', this.props);
    
    return (
      <div>
        {
          tagsList.map( (tag, index) => {
            return (
              <div key={index}>
                <h5 onClick={ () => this.changeTag(tag)} >{tag}</h5>
              </div>
            )
          })
        }
        
      </div>
    );
  }
}

export const query = graphql`
query TagsQuery($tag: [String!]) {
  tags: allMarkdownRemark(filter: {frontmatter: {tags: {in: $tag}}}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          category
          tags
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
}

`;

export default TagsList;
