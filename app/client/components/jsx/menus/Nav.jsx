import React from 'react';
import SearchForm from './../search/SearchForm.jsx';
import { Link } from 'react-router-dom';

/*
  Renders the Nav Bar
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class Nav extends React.Component {
  render() {
    let items = this.props.items;
    
    return (
        <nav className={this.props.styles}>
          <div className="align-middle">
            <div className="navbar-res">
              <SearchForm />
            </div>
              
            <ul className="main-menu row text-left">
              { items.map(function(l, index) {
                return <li key={l.slug} className="col-lg-2"><Link to={l.url}><span>Next </span>{l.name}</Link></li>
              })}
            </ul>
          </div>
        </nav>
    );
  }
}