import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';


// https://github.com/kriasoft/react-starter-kit/blob/master/docs/recipes/how-to-integrate-disqus.md
// https://blog.jetboystudio.com/articles/gatsby/
// http://soofka.pl/entry/how-to-integrate-disqus-comments-in-react-app

class DisqusThread extends React.Component {

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <ReactDisqusComments
        shortname="example"
        identifier="something-unique-12345"
        title="Example thread"
        url="http://www.example.com/example-thread"
        category_id="12345"
        onNewComment={this.handleNewComment}/>
    )
  }

}


export default DisqusThread;
