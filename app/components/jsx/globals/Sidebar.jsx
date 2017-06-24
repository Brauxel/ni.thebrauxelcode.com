import React from 'react';
import RaisebookLogo from './../../images/logos/raisebook.svg';

export default class Sidebar extends React.Component {
	render() {
		return(
			<aside className="col-lg-2 sidebar pt-5 pb-5 offset-lg-1">
				<div className="row text-center company-logo mb-5 pb-4 pt-4">
    				<div className="col-xl-12">
						<a className="image" href="#"><img src="https://s3.amazonaws.com/landtrustalliance.org/styles/1600-800/s3/rotator/image/ConservationFoundationGulfCoast-Florida-GlennGardner-G2photos-1600-800.jpg?itok=IAxeAMvY" alt="" title="" className="img-fluid mb-4" /></a>
						<p className="mb-0"><a href="#">Name</a></p>
					</div>
				</div>

				<div className="row mt-5 text-center">
					<div className="col-lg-12">
						<a className="btn btn-outline-primary" href="#">Manage<br /> subscription</a>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-12">
						<h4 className="text-center">Share</h4>
					</div>
							
					<div className="col-lg-12 mt-3 pl-0 pr-0">
					</div>
				</div>

				<div className="row mt-5 raisebook-panel">
					<div className="col-lg-12">							
						<div className="text-center pt-5 pb-5">
							<div className="col-lg-12">
								<a href="https://raisebook.com/" target="_blank"><img src={RaisebookLogo} alt="Raisebook" title="Raisebook" className="img-fluid" /></a>
							</div>
									
							<div className="col-lg-12 mt-5">
								<a href="https://raisebook.com/" className="btn btn-secondary border-0" target="_blank">Find out more</a>
							</div>
						</div>
					</div>
				</div>
			</aside>
		);
	}
}