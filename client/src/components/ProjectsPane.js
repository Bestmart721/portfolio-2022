import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class ProjectsPane extends Component {
  componentDidMount() {
    console.log("ProjectsPane mounted");
  }

  render() {
    return (
      <div className="pane projects-pane">
        <Link className="nav-left" to="/" onClick={ () =>
          this.props.setPane('landing') }>
          {"<"} back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pane: state.pane
  };
}

export default connect(mapStateToProps, actions)(ProjectsPane);
