import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";
import ProjectSlide from './ProjectSlide';

class ProjectsPane extends Component {
  componentDidMount() {
    console.log("ProjectsPane mounted");
  }

  static get DISPLAY_STRING() { return "PROJECTS."; }

  render() {
    return (
      <div className="pane projects-pane">
        <Link className="nav-left" to="/" onClick={ () =>
          this.props.setPane('landing') }>
          {"<"} back
        </Link>
        <div className="projectbox">
          {this.constructor.DISPLAY_STRING.split('').map(
            (letter, i) =>
                (<ProjectSlide key={i} letter={letter} />)
          ) || null}
        </div>
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
