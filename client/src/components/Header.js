import React, { Component } from 'react';
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
          <div>
            <li>
              <a href="/auth/google">
                Log in with Google
              </a>
            </li>
          </div>
        );
      default:
        // AJAX gave us something other than false / null
        return (
          <div>
            <h1>Logged in as</h1>
            <li>
              <a href="/api/logout">
                Log out
              </a>
            </li>
          </div>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
//                       { auth } <- Grabs the auth field of state
function mapStateToProps({ auth }) {
  return { auth }; // Equilalent to { auth : auth }
}

export default connect(mapStateToProps)(Header);
