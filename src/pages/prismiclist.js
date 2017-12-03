import React from "react";
import Link from "gatsby-link";

class PrismicList extends React.Component {

  getPostList() {
    const postList = [];
    if (this.props.postEdges) {
      this.props.postEdges.forEach(postEdge => {
        postList.push({
          title: postEdge.node.data.title.map( (item) => item.text),
          body: postEdge.node.data.body.map( (item) => item.text),
        });
      });
    }
    
    return postList;
  }

  render() {
    const postList = this.getPostList();
    console.log('postList ', postList);
    return (
      <div>
        {/* Your post list here. */
        postList.map( (post, index) =>
          <div key={index}>
            <h1>{post.title}</h1>
            <h4>{post.body}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default PrismicList;
