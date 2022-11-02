import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class ProjectSlide extends Component {
  render() {
    return (
      <div className="projectSlide">
        <div className={this.props.imgClass}/>
        <div className="project-img-over"/>
        <h1 className={this.props.letterClass + " noselect"}>{this.props.letter}</h1>
        <p className="project-title project-title-top">{this.props.title}</p>
        <p className="project-title project-title-bottom">{this.props.title}</p>
      </div>
    )
  }
}

export default connect()(ProjectSlide);
