import React from 'react';
import Header from './globals/Header.jsx';
import Skeleton from './Skeleton.jsx';
import Footer from './globals/Footer.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
  Renders the Outer Skeleton of our app
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="overlay main-overlay">&nbsp;</div>
          <Header />
          <Skeleton />
          <Footer />
        </div>
      </Router>
    );
  }
}