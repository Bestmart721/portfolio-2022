import { React, Component, Fragment } from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";
import Header from './Header';
import LandingPane from './LandingPane';
import AboutPane from './AboutPane';
import ProjectsPane from './ProjectsPane';

class App extends Component {
  componentDidMount() {
    // Send an AJAX request with axios (our fetchUser action) on load
    this.props.fetchUser();
  }

  paneMatch(pane) {
    for (let i = 1; i < arguments.length; ++i) {
      if (arguments[i] === pane) {
        return true;
      }
    }
    return false;
  }

  buildPanes() {
    return (
      <Fragment>
        { this.paneMatch(
          this.props.pane.current,
          "landing",
          "about") ?
          <AboutPane/> : null }
        { this.paneMatch(
          this.props.pane.current,
          "landing",
          "about",
          "projects") ?
          <LandingPane/> : null }
        { this.paneMatch(this.props.pane.current, "landing", "projects") ?
          <ProjectsPane/> : null }
      </Fragment>
    );
  }

  generateClassName() {
    return this.props.pane.previous != this.props.pane.current ?
      "container from-pane-" + this.props.pane.previous : "container";
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className={ this.generateClassName() }>
            <Route path="/" render={ () =>
              this.buildPanes()
            } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { pane: state.pane };
}

export default connect(mapStateToProps, actions)(App);
