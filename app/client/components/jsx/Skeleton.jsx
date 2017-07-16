import React from 'react';
import Header from './globals/Header.jsx';
import Home from './home/Home.jsx';
import Footer from './globals/Footer.jsx';
import PostListing from './posts/PostListing.jsx';
import SearchListing from './search/SearchList.jsx';
import ImageScanner from './helpers/ImageScanner.jsx';
import Post from './posts/Post.jsx';
import { Route } from 'react-router-dom';

// This function automates the import of images
// @param folder_path
// @param keep_paths
// @param extensions_to_scan
// @return array['image_name' => image_path]
const logos = ImageScanner(require.context('../images/logos', false, /\.(png|jpe?g|svg)$/));

/*
  Renders the Outer Skeleton of our app
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class Skeleton extends React.Component {
  render() {
    const options = {logo: logos['nmb.svg']}

    return (
        <div>
          <Route exact path="/" component={Home} />

          <Route exact path="/next-mining-boom" render={(props) => (<PostListing logo={logos['nmb.svg']} />)} />
          <Route path='/next-mining-boom/:slug' render={(props) => (<Post {...props} data={options} />)} />
        </div>
    );
  }
}