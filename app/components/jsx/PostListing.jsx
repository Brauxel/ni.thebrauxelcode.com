import React from 'react';
import Sidebar from './Sidebar.jsx';
import SubscribeFormOptionLess from './SubscribeFormOptionLess.jsx';

export default class PostsListing extends React.Component {
	render() {
		return(
			<main id="blog">
				<div className="jumbotron banner">
	    			<section className="banner-content align-middle">
	    				<div className="inner">
	    					<div className="container">
	    						<div className="row">
	    							<div className="col-xl-5 mb-5">
	    								<img className="img-fluid" src={this.props.logo} alt="" title="" />
	    							</div>
	    							
	    							<div className="col-xl-7">
	    								<SubscribeFormOptionLess />
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    			</section>
	    		</div>

				<div className="container">
	    			<div className="row">
	    				<div className="col-lg-9">
							<div className="row">
	    						<section className="col-lg-12 articles">
	    							<article className="row blog-brief pt-5 pb-5">
										<div className="col-md-2">
											<a href="#"><img src="https://s3.amazonaws.com/landtrustalliance.org/styles/1600-800/s3/rotator/image/ConservationFoundationGulfCoast-Florida-GlennGardner-G2photos-1600-800.jpg?itok=IAxeAMvY" className="img-fluid" alt="" title="" /></a>
										</div>
									
										<div className="col-md-9 synopsis pt-4 pb-4">
											<h2><a href="#">The title</a></h2>
											<p className="date">Date</p>
											<p>Excerpt</p>
											<a href="#" className="btn btn-outline-primary float-right mt-5">Read Article</a>
										</div>
	    							</article>
	    						</section>

								<div className="col-md-12 raisebook-block pt-5 pb-5 text-center">
	   								<div className="row">
	   									<div className="col-lg-4">
	   										<a href="https://raisebook.com/" target="_blank"><img src="https://s3.amazonaws.com/landtrustalliance.org/styles/1600-800/s3/rotator/image/ConservationFoundationGulfCoast-Florida-GlennGardner-G2photos-1600-800.jpg?itok=IAxeAMvY" className="img-fluid" /></a>
										</div>
										
										<div className="col-lg-4 align-wrapper offset-xl-1">
											<p className="align-bottom">Are you a sophisticated investor?</p>
										</div>
										
										<div className="col-lg-3 align-wrapper link">
											<div className="align-bottom">
												<a href="https://raisebook.com/" target="_blank" className="btn btn-secondary border-0">Find out more</a>
											</div>
										</div>
									</div>
	   							</div>    						
	    					</div>
	    				</div>

	    				<Sidebar />
	    			</div>
	    		</div>
			</main>	    		
		);
	}
}