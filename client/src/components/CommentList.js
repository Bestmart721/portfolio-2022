import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

class CommentList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  renderComments() {
    return (this.props.comments && this.props.comments.map(
      (comment, i) =>
          <Comment key={comment._id} data={comment} />
      ) || null
    );
  }

  render() {
    return (
      <Fragment>
        <h3 className="testimonials-header">See what people have to say:</h3>
        { this.renderComments() }
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
