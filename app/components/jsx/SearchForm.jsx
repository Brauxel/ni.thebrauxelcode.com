import React from 'react';

/*
  Renders the Search Bar
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class SearchForm extends React.Component {
  render() {
    return (
      <form className="navbar-form navbar-res" action="#">
        <input className="form-control" type="text" name="search" placeholder="Search..." />
      </form>
    );
  }
}