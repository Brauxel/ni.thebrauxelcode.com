import React from 'react';
import Sidebar from './../globals/Sidebar.jsx';
import Post from './PostPreview.jsx';
import SubscribeForm from './../subscribe-forms/SubscribeFormOptionLess.jsx';
import CurrentStock from './../companies/CurrentStock.jsx';
import RaisebookLogo from './../../images/logos/raisebook.svg';

export default class PostsListing extends React.Component {
	render() {
		return(
			<main id="blog">
	    		<div className="jumbotron banner">
	    			<div className="overlay">&nbsp;</div>
	    			<section className="banner-content align-middle">
	    				<div className="inner">
	    					<div className="container">
	    						<div className="row">
	    							<div className="col-xl-5 mb-5">
										<a href="#"><img src={this.props.logo} alt="" title="" height="55" /></a>
	    							</div>
	    							
	    							<div className="col-xl-7 form-holder">
	    								<a href="#" className="btn btn-outline-primary show-form">Keep me informed</a>
	    								<SubscribeForm />
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
	    							<Post />

	    							<Post />
	    						</section>

	    						<div className="col-md-12">
	    							<div className="current-stocks text-center pt-5 pb-5 mb-5 mt-4">
										<div className="col-md-12">
											<h3 className="mb-5">Current Stocks</h3>
										</div>
									
										<div className="row pb-5">
											<CurrentStock logo='http://v3.nextminingboom.com/wp-content/uploads/sites/9/2017/05/MAG.jpg' code='ASX: MAG' />

											<CurrentStock logo='http://v3.nextminingboom.com/wp-content/uploads/sites/9/2017/05/MAG.jpg' code='ASX: MAG' />

											<CurrentStock logo='http://v3.nextminingboom.com/wp-content/uploads/sites/9/2017/05/MAG.jpg' code='ASX: MAG' />
										</div>
	    							</div>
	    						</div>

	    						<div className="col-md-12">
	    							form goes here
	    						</div>

								<div className="col-md-12 raisebook-block pt-5 pb-5 text-center">
	   								<div className="row">
	   									<div className="col-lg-4">
	   										<a href="https://raisebook.com/" target="_blank"><img src={RaisebookLogo} className="img-fluid" /></a>
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