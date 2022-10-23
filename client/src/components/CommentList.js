import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        CommentList
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
