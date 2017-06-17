import React from 'react';
import SearchForm from './SearchForm.jsx';

/*
  Renders the Nav Bar
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class Nav extends React.Component {
  render() {
    return (
        <nav>
          <SearchForm />
            
          <ul className="main-menu row text-left">
            <li className="col-lg-2"><a href="http://staging.nextminingboom.com/"><span>Next </span>Mining Boom</a></li>
            <li className="col-lg-2"><a href="http://staging.nextoilrush.com/"><span>Next </span>Oil Rush</a></li>
            <li className="col-lg-2"><a href="http://staging.nexttechstock.com/"><span>Next </span>Tech Stock</a></li>
            <li className="col-lg-2"><a href="http://staging.nextsmallcap.com/"><span>Next </span>Small Cap</a></li>
            <li className="col-lg-2"><a href="http://staging.nextbiotech.com.au/"><span>Next </span>Biotech</a></li>
            <li className="col-lg-2"><a href="https://raisebook.com/" target="_blank">Raisebook</a></li>
          </ul>
        </nav>
    );
  }
}