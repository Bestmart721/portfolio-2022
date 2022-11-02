import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class ProjectSlide extends Component {
  render() {
    return (
      <div className={this.props.imgClass + " projectSlide"}>
        <h1 className="noselect">{this.props.letter}</h1>
        <p className="project-title project-title-top">{this.props.title}</p>
        <p className="project-title project-title-bottom">{this.props.title}</p>
      </div>
    )
  }
}

export default connect()(ProjectSlide);
