import React from 'react';
import Header from './globals/Header.jsx';
import Home from './home/Home.jsx';
import Footer from './globals/Footer.jsx';
import PostListing from './posts/PostListing.jsx';
import SearchListing from './search/SearchList.jsx';
import Post from './posts/Post.jsx';
import { Route } from 'react-router-dom';

/*
  Renders the Outer Skeleton of our app
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class Skeleton extends React.Component {
  render() {

    return (
        <div>
          <Route exact path="/" component={Home} />

          <Route exact path="/:site" render={(props) => (<PostListing {...props} />)} />
          <Route path='/:site/:slug' render={(props) => (<Post {...props} />)} />
        </div>
    );
  }
}