import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class Comment extends Component {
  render() {
    return (
      <div id={
        this.props.auth._id === this.props.data._user ? "my-testimonial" : null
      } className="comment-card">
        <p>{ this.props.data.title }</p>
        <p>{ this.props.data.content }</p>
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
