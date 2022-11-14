import React, { Component, Fragment } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";
import LandingPane from './panes/landing';
import AboutPane from './panes/about';
import ProjectsPane from './panes/projects';
import ReactDOM from 'react-dom';

const App = (props) => {
  function componentDidMount() {
    // Send an AJAX request with axios (our fetchUser action) on load
    props.fetchUser();
  }

  document.body.style.setProperty('--page-height', window.innerHeight);

  function handleScrollUpdate(event) {
    document.body.style.setProperty(
      '--scroll',
      window.pageYOffset / (
          document.body.offsetHeight - window.innerHeight
      )
    );
  };

  React.useEffect(() => {
      window.addEventListener('scroll', handleScrollUpdate);
      // Return "cleanup" function
      return () => {
        window.removeEventListener('scroll', handleScrollUpdate);
      };
    }, []);

  function paneMatch(pane) {
    for (let i = 1; i < arguments.length; ++i) {
      if (arguments[i] === pane) {
        return true;
      }
    }
    return false;
  }

  function buildPanes() {
    if( props.pane && !props.pane.moving ) {
      return (
        <Fragment>
          { paneMatch(
            props.pane.current,
            "about", "landing") ?
            <AboutPane/> : null }
          { paneMatch(
            props.pane.current,
            "landing",
            "about",
            "projects") ?
            <LandingPane/> : null }
          { paneMatch(props.pane.current,
            "projects", "landing") ?
            <ProjectsPane/> : null }
        </Fragment>
      )
    }

    return (
      <Fragment>
        { paneMatch(
          props.pane.current,
          "landing",
          "about") ?
          <AboutPane/> : null }
        { paneMatch(
          props.pane.current,
          "landing",
          "about",
          "projects") ?
          <LandingPane/> : null }
        { paneMatch(props.pane.current, "landing", "projects") ?
          <ProjectsPane/> : null }
      </Fragment>
    );
  }

  function generateClassName() {
    return (props.pane.previous !== props.pane.current ?
      " from-" +
      props.pane.previous +
      " to-" +
      props.pane.current :
      null);
  }

  return (
    <BrowserRouter>
      <div className={ "container" + generateClassName() }>
        <Route path="/" render={ () =>
          buildPanes()
        } />
      </div>
      <div className={ "mask" + generateClassName() }/>
    </BrowserRouter>
  );
};

function mapStateToProps(state) {
  return { pane: state.pane };
}

export default connect(mapStateToProps, actions)(App);
