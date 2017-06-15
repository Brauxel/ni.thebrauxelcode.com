import React from 'react';

module.exports = React.createClass({
  render: function() {
    return (
        <Nav />
    )
  }
});

var Nav = React.createClass({
  	render: function() {
    	return (
        <form className="navbar-form navbar-res" action="#">
          <input className="form-control" type="text" name="search" placeholder="Search..." />
        </form>
    	)
  	}
});