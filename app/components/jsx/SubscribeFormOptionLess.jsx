import React from 'react';

export default class SubscribeFormOptionLess extends React.Component {
	render() {
		return(
			<form className="mt-4" action="#">
	    		<input type="text" className="form-control mb-3" placeholder="Name" />
	    		<input type="email" className="form-control mb-3" placeholder="Email" />
	    		<button className="btn btn-secondary mt-4 border-0">Please keep me informed</button>
			</form>
		);
	}
}