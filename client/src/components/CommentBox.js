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
            <h2>Simple Default Input</h2>
            <div>
              <label>First Name</label>
              <Field name="firstName" component="input" placeholder="First Name" />
            </div>

            <h2>Render Function</h2>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <div>
                  <label>Bio</label>
                  <textarea {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />

            <h2>Render Function as Children</h2>
            <Field name="phone">
              {({ input, meta }) => (
                <div>
                  <label>Phone</label>
                  <input type="text" {...input} placeholder="Phone" />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button type="submit">Submit</button>
          </form>
        )}
      />
    );
  }
}

export default connect(null, actions)(CommentBox);
