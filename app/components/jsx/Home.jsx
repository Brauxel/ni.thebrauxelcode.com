import React from 'react';
import VideoBanner from './VideoBanner.jsx'

module.exports = React.createClass({
  render: function() {
    return (
        <Home />
    )
  }
});

var Home = React.createClass({
  	render: function() {
    	return (
        <main>
          <h1>HOme</h1>
          <VideoBanner />
        </main>
    	)
  	}
});