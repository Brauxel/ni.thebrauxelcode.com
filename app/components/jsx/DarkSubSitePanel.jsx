import React from 'react';

export default class DarkSubSitePanel extends React.Component {
	render() {
		return(
	        <div className="dark">
	          <div className="container">
	            <div className="row text-center">
	              <div className="col-lg-7 mx-auto">
	                <h2 className="mb-5">{this.props.name}</h2>
	                <p>{this.props.description}</p>
	                <a className="btn btn-outline-primary mt-5" href="http://staging.nextminingboom.com/">View all articles</a>
	              </div>
	            </div>
	          </div>
	        </div>
		);
	}
}