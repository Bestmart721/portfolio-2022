import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";

class AboutPane extends Component {
  componentDidMount() {
    console.log("AboutPane mounted");
  }

  renderContent() {
    return (
      <div className="pane about-pane">
        <h1>About</h1>
        <div className="nav-right">
          <Link to="/" onClick={ () => this.props.setPane('landing') }>
            Go to landing
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default connect(null, actions)(AboutPane);
