import React from 'react';

export default class LatestArticlePanel extends React.Component {
	render() {
		return(
	        <div className="panel nmb-panel jumbotron" id={this.props.slug}>
	          <div className="overlay">&nbsp;</div>
	          <div className="container">
	            <div className="row">
	              <div className="col-lg-5 float-right offset-lg-7">
	                <img src={this.props.logo} className="mb-5" alt={this.props.name} title={this.props.name} height="50" />
	                <h3 className="mt-4">PSM Adds Zinc Assets to its South Korean Metals Portfolio</h3>
	                <a className="float-right clearfix btn btn-outline-primary mt-5" href="#">Read Article</a>
	              </div>
	            </div>
	          </div>
	        </div>
		);
	}
}