import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";

class ProjectSlide extends Component {
  render() {
    return (
      <div className="projectSlide">
        <h1>{this.props.letter}</h1>
      </div>
    )
  }
}

export default connect()(ProjectSlide);
