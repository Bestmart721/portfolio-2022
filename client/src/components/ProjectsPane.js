import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from "../actions";
import ProjectSlide from './ProjectSlide';

class ProjectsPane extends Component {
  componentDidMount() {
    console.log("ProjectsPane mounted");
  }

  static get DISPLAY_STRING() { return "MYWORK"; }
  static get TAGLINES() { return [
    "This Website > Express React Redux",
    "Bandcamp Scraping > Rust",
    "Minecraft Modding > Java FabricAPI",
    "Tweet Cartography > Python",
    "Game Jams > Godot",
    "Spotify Playlist Art > GIMP"
  ] }

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
                (<ProjectSlide key={i}
                  letter={letter}
                  imgClass={"project-img project-img-" + i}
                  letterClass={"project-letter-" + i}
                  title={this.constructor.TAGLINES[i]}
                  />)
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
