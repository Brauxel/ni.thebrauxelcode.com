import React from 'react';

export default class SearchItem extends React.Component {
	render() {
		return(
			<article className="row pb-5 pt-5 pr-5 pl-5">
				<div className="col-sm-3">
					<a href="#"><img className="img-fluid" src="http://staging.nextsmallcap.com/wp-content/uploads/sites/13/2017/04/vmc-edm-260x146.jpg" alt="" title="" /></a>
				</div>
										
				<div className="col-sm-9 mt-3">
					<h3><a href="#">The Next Small Cap</a></h3>
					<h4 className="mb-3"><a href="#">ASX Micro Cap Now Drilling for Zinc and Gold with Cobalt to Follow</a></h4>
					<p>What do you get when you combine lithium, zinc, copper, gold and cobalt? In today’s exploration climate… you get a fully diversified portfolio that could have significant upside. Lithium, copper and cobalt are all enjoying exceptionally high levels of investor interest right now on the back of the current energy revolution, led by the infiltration of lithium-ion battery energy storage systems.   The importance of these metals in the manuf...</p>
					<a className="btn btn-outline-primary float-right" href="#">Read Article</a>
				</div>
			</article>
		);
	}
}