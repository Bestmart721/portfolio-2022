import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class ProjectSlide extends Component {
  render() {
    return (
      <Link className="projectSlide"
            to={this.props.endpoint}>
        <div className={this.props.imgClass}/>
        <div className="project-img-over"/>
        <h1 className={this.props.letterClass + " noselect"}>{this.props.letter}</h1>
        <p className="project-title project-title-bottom">{this.props.title}</p>
      </Link>
    )
  }
}

function mapStateToProps(state) {
  return {
    pane: state.pane
  };
}

export default connect(mapStateToProps)(ProjectSlide);
