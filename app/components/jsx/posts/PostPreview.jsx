import React from 'react';

export default class extends React.Component {
	render() {
		return(
			<article className="row blog-brief pt-5 pb-5">
				<div className="col-md-2">
					<a href="#"><img src="http://staging.nextminingboom.com/wp-content/uploads/sites/9/2016/10/PSM.jpg" className="img-fluid" alt="" title="" /></a>
				</div>
									
				<div className="col-md-9 synopsis pt-4 pb-4">
					<h2><a href="#">PSM Adds Zinc Assets to its South Korean Metals Portfolio</a></h2>
					<p className="date">Apr 4, 2017</p>
					<p>It’s all systems go at Peninsula Mines (ASX: PSM) as we move into the second quarter of 2017. As we mentioned in our previous article on this ASX-dwelling Asian interloper, PSM is already on-track to deliver a graphite/lithium option in the high tech hub of South Korea.</p>
					<a href="#" className="btn btn-outline-primary float-right mt-5">Read Article</a>
				</div>
	    	</article>
		);
	}
}