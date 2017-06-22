import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import PostListing from './PostListing.jsx';
import ImageScanner from './ImageScanner.jsx';

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
    return (
        <section className="page-template-internal-home blog-9">
          <div className="overlay main-overlay">&nbsp;</div>
          <Header />
          <PostListing logo={logos['nmb.svg']} />
          <Footer />
        </section>
    );
  }
}