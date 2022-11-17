import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import CommentList from './CommentList';
import CommentBox from './CommentBox';
import { Link } from 'react-router-dom';
import * as actions from "../../../actions";
import LoadingSwirl from "../../LoadingSwirl"

class LandingPane extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments() {
    switch (this.props.auth) {
      case null:
        // AJAX for log in is still hanging...
        return (<div className="fadein comments">
          <p>Loading testimonials...</p>
          <LoadingSwirl/>
        </div>);
      case false:
        // AJAX says we have no current user session
        return (
          <div className="fadein comments">
            <div className="testimonials-header">
              <h2>TESTIMONIAL:</h2>
              <p>noun. A written affirmation of another's character or worth</p>
              <p className="indent-6">A personal recommendation</p>
            </div>
            <CommentList />
            <div className="comment-prompt">
              <a href="/auth/google">Log in</a>
              <p>to leave yours</p>
            </div>
          </div>
        );
      default:
        // AJAX gave us something other than false / null
        return (
          <div className="fadein comments">
            <CommentBox />
            <h3 className="testimonials-header-small">TESTIMONIALS</h3>
            <CommentList />
          </div>
        );
    }
  }

  renderContent() {
    return (
      <div className="pane landing-pane">
        <div className="fadein">
          <Header />
          <Link className="nav-left" to="/about" onClick={ () =>
            this.props.setPane('about') }>
            {"<"} about
          </Link>
          <Link className="nav-right" to="/projects" onClick={ () =>
            this.props.setPane('projects') }>
            projects {">"}
          </Link>
        </div>
        <div className="landing-box">
          <div className="bg-hero noselect">
            <h1>QUAKER</h1>
            <h1>QUAKER</h1>
            <h1>QUAKER</h1>
            <h1>QUAKER</h1>
            <h1>QUAKER</h1>
            <h1>QUAKER</h1>
          </div>
          <div className="hero noselect">
            <h1 className="hero-piece-1">S</h1>
            <h1 className="hero-piece-2">C</h1>
            <h1 className="hero-piece-3">H</h1>
            <h1 className="hero-piece-4">N</h1>
            <h1 className="hero-piece-5">E</h1>
            <h1 className="hero-piece-6">I</h1>
            <h1 className="hero-piece-7">D</h1>
            <h1 className="hero-piece-8">E</h1>
            <h1 className="hero-piece-9">R</h1>
          </div>
          <div className="fadein">
            <div className="hero-footer-box">
              <div className="hero-footer small-line">
                <a href="https://www.github.com/daatguy"
                   target="_blank"
                   rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/quaker-schneider-947a97249"
                   target="_blank"
                   rel="noopener noreferrer">LinkedIn</a>
                <a href="https://itch.io/profile/daatguy"
                   target="_blank"
                   rel="noopener noreferrer">Itch.io</a>
              </div>
              <div className="hero-footer small-line">
                <a href="https://www.linkedin.com"
                   target="_blank"
                   rel="noopener noreferrer">Resume</a>
                <a href="mailto:hdschnei@ncsu.edu">Email</a>
              </div>
            </div>
          </div>
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
