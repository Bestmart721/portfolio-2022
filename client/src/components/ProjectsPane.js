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
      <div className="pane projects-pane">
        <h1>Projects</h1>
        <div className="nav-left">
          <Link to="/" onClick={ () => this.props.setPane('landing') }>
            Go to landing
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default connect(null, actions)(ProjectsPane);
