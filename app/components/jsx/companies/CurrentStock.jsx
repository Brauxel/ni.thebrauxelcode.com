import React from 'react';

export default class CurrentStock extends React.Component {
	render() {
		return(
			<div className="col-md-2 mb-5">
				<a className="logo pb-3" href="#">
					<img src={this.props.logo} className="img-fluid mb-2" alt={this.props.code} title={this.props.code} />
					<p className="mb-0 pt-3">{this.props.code}</p>
				</a>
			</div>
		);
	}
}