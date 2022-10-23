import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {
  render() {
    return (
      <div>
        CommentBox
      </div>
    );
  }
}

export default connect()(CommentBox);
