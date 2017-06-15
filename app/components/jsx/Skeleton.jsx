import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';

module.exports = React.createClass({
  render: function() {
    return (
        <Skeleton />
    )
  }
});

var Skeleton = React.createClass({
  	render: function() {
    	return (
          <div>
            <Header />
            <Home />
          </div>
    	)
  	}
});