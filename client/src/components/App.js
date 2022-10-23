import { React, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from "../actions";
import Header from './Header';

const Landing = () => {
  return (
    <h2>Landing</h2>
  )
}

const About = () => {
  return (
    <h2>About</h2>
  )
}

const Projects = () => {
  return (
    <h2>Projects</h2>
  )
}

const CommentList = () => {
  return (
    <h2>CommentList</h2>
  )
}

const CommentBox = () => {
  return (
    <h2>CommentBox</h2>
  )
}

class App extends Component {
  componentDidMount() {
    // Send an AJAX request with axios (our fetchUser action) on load
    this.props.fetchUser();
  }

  render() {
    return  (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Header} />
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
