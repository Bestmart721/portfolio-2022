import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form'
import * as actions from "../actions";

class CommentBox extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Form
        onSubmit={this.props.postComment}
        //validate={validate}
        render={({ handleSubmit, submitting }) =>
          this.props.auth && this.props.auth.posted ?
          (
            <div className="commentbox">
              <div className="small-line">
                <p>Thank you for your feedback!</p>
              </div>
              <div className="small-line">
                <p>View</p>
                <a href="/#my-testimonial">your testimonial</a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="commentbox">
                <div>
                  <label>Post Title</label>
                  <Field name="title"
                         component="input"
                         placeholder="Are you George?" />
                </div>
                <div>
                  <label>Body</label>
                  <Field name="content"
                         component="textarea"
                         placeholder="George's thoughts" />
                </div>
                <button type="submit" disabled={ submitting }>Submit</button>
              </div>
            </form>
          )
        }
      />
    );
  }
}
//                       { auth } <- Grabs the auth field of state
function mapStateToProps(state) {
  return {
    auth: state.auth,
    comments: state.comments
  }; // Equilalent to { auth : auth }
}

export default connect(mapStateToProps, actions)(CommentBox);
