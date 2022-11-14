import React, { Component, Fragment, Image } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../../../actions";
import AboutImage from '../../../assets/about.jpg';

class AboutPane extends Component {
  justMovedIn() {
    return this.props.pane && (this.props.pane.current === 'about' ||
      this.props.pane.previous === 'about' && this.props.pane.moving);
  }

  render() {
    return (
      <div className={
        "pane about-pane" +
        (this.props.pane.current === "about" || this.props.pane.moving ?
         " playing" : " paused")
      }>
        <h1 className="about-bg noselect">ABOUT</h1>
        <div className="about-image">
          <img src={AboutImage} alt="a beautiful picture of me"/>
        </div>
        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <Link className="nav-right" to="/" onClick={ () => this.props.setPane('landing') }>
          back {">"}
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

export default connect(mapStateToProps, actions)(AboutPane);
