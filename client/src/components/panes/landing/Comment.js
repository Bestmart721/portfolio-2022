import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../actions";

class Comment extends Component {
  render() {
    return (
      <div id={
        this.props.auth._id === this.props.data._user ? "my-testimonial" : null
      } className="comment-card">
        <p className="title">{ this.props.data.title }</p>
        <p className="body">{ this.props.data.content }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Comment);
