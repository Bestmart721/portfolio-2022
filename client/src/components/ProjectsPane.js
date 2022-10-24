import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class ProjectsPane extends Component {
  componentDidMount() {
    console.log("ProjectsPane mounted");
  }

  renderContent() {
    return (
      <div className="projects-pane">
        <h1>Projects</h1>
        <Link to="/" onClick={ () => this.props.setPane('landing') }>
          Go to landing
        </Link>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default connect(null, actions)(ProjectsPane);
