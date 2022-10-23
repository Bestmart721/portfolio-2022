import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form'
import * as actions from "../actions";

class CommentBox extends Component {
  render() {
    return (
      <Form
        onSubmit={this.props.postComment}
        //validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Author</label>
              <Field name="title" component="input" placeholder="Are you George?" />
            </div>
            <div>
              <label>Body</label>
              <Field name="content" component="input" placeholder="George's thoughts" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default connect(null, actions)(CommentBox);
