import React from 'react';
import Sidebar from './../globals/Sidebar.jsx';
import Post from './PostPreview.jsx';
import SubscribeFormOptionLess from './../subscribe-forms/SubscribeFormOptionLess.jsx';
import RaisebookLogo from './../../images/logos/raisebook.svg';

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
	    							<Post />

	    							<Post />
	    						</section>

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