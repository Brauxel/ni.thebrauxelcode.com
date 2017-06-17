import React from 'react';
import VideoBanner from './VideoBanner.jsx'

/*
  Renders the Home Page content
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class Home extends React.Component {
  render() {
    return (
      <main>
        <VideoBanner />
      </main>
    );
  }
}