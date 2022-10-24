import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class LandingPane extends Component {
  componentDidMount() {
    console.log("LandingPane mounted");
    this.props.fetchComments();
  }

  renderComments() {
    switch (this.props.auth) {
      case null:
        // AJAX for log in is still hanging...
        return '';
      case false:
        // AJAX says we have no current user session
        return (
          <div className="comments">
            <CommentList />
            <div className="comment-prompt">
              <a href="/auth/google">Log in</a>
              <p>to comment</p>
            </div>
          </div>
        );
      default:
        // AJAX gave us something other than false / null
        return (
          <div className="comments">
            <CommentBox />
            <CommentList />
          </div>
        );
    }
  }

  renderContent() {
    return (
      <div className="pane landing-pane">
        <div className="landing-box">
          <Header />
          <Link className="nav-left" to="/about" onClick={ () => this.props.setPane('about') }>
            Go to about
          </Link>
          <Link className="nav-right" to="/projects" onClick={ () => this.props.setPane('projects') }>
            Go to projects
          </Link>
          <h1 className="hero">SCHNEIDER</h1>
          <div className="hero-footer-box">
            <div className="hero-footer small-line">
              <a href="https://www.linkedin.com"
                 target="_blank"
                 rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.github.com/daatguy"
                 target="_blank"
                 rel="noopener noreferrer">Github</a>
              <a href="https://itch.io/profile/daatguy"
                 target="_blank"
                 rel="noopener noreferrer">Itch.io</a>
            </div>
            <div className="hero-footer small-line">
              <a href="https://www.linkedin.com"
                 target="_blank"
                 rel="noopener noreferrer">My Resume</a>
              <a href="mailto:hdschnei@ncsu.edu">Email me</a>
            </div>
          </div>
          <div id="hero-buffer" />
        </div>
        { this.renderComments() }
      </div>
    )
  }

  render() {
    return this.renderContent();
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    pane: state.pane
  };
}

export default connect(mapStateToProps, actions)(LandingPane);
