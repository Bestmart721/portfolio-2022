import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // AJAX for log in is still hanging...
        return '';
      case false:
        // AJAX says we have no current user session
        return (
          <a href="/auth/google">
            Log in with Google
          </a>
        );
      default:
        // AJAX gave us something other than false / null
        return (
          <Fragment>
            <h1>Logged in as</h1>
            <a href="/api/logout">
              Log out
            </a>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}
//                       { auth } <- Grabs the auth field of state
function mapStateToProps({ auth }) {
  return { auth }; // Equilalent to { auth : auth }
}

export default connect(mapStateToProps)(Header);
