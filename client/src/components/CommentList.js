import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  render() {
    return (
      <div>
        CommentList
      </div>
    );
  }
}

export default connect()(CommentList);
