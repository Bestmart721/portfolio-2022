import React, { Component } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";
import { SET_PROJECT_FOCUS } from "../actions/types";

const ProjectSlide = props => {

  const dispatch = useDispatch()

  return (
    <Link className="projectSlide"
          to={props.endpoint}
          onMouseOver={ async () => dispatch({
            type: SET_PROJECT_FOCUS,
            payload: props.index
          }) }
          onMouseLeave={ async () => dispatch({
            type: SET_PROJECT_FOCUS,
            payload: -1
          }) }>
      <div className={props.imgClass}/>
      <div className="project-img-over"/>
      <h1 className={props.letterClass + " noselect"}>{props.letter}</h1>
      <p className="project-title project-title-bottom">{props.title}</p>
    </Link>
  );
}

function mapStateToProps(state) {
  return {
    pane: state.pane,
    focus: state.project_focus
  };
}

export default connect(mapStateToProps)(ProjectSlide);
