import React from 'react';
import Sidebar from './../globals/Sidebar.jsx';
import SubscribeForm from './../subscribe-forms/SubscribeFormOptionLess.jsx';
import RaisebookLogo from './../../images/logos/raisebook.svg';
import Axios from 'axios';
import Parser from 'html-react-parser';

export default class Post extends React.Component {
  	constructor(props){
	    super(props);

	    let _this = this;
	    let post = {};
	    let postUrl = 'http://staging.nextminingboom.com/wp-json/wp/v2/posts?slug='+this.props.match.params.slug;

	    this.state = { "post" : { title: { rendered: "" }, content: { rendered: ""}, author_name: "", categoryID: 0, category_name: ""}}

	    Axios.get(postUrl).then(function(response) {
	      post = response.data;
	      _this.setState({post: post[0]});
	    });
  	}
	render() {
		let postDate = this.state.post.date;
    	let prettyDate = new Date(postDate).toLocaleString();
    	prettyDate = prettyDate.split(' ')[0];
    	prettyDate = prettyDate.substr(0,prettyDate.length-1).replace(/\//ig, '-');

		return(
			<main id="post">
	    		<div className="jumbotron banner">
	    			<div className="overlay">&nbsp;</div>
	    			<section className="banner-content align-middle">
	    				<div className="inner">
	    					<div className="container">
	    						<div className="row">
	    							<div className="col-xl-5 mb-5">
										<a href="#"><img src={this.props.data.logo} alt="" title="" height="55" /></a>
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
		    				<div className="row pt-5 pb-5">
		    					<article className="col-md-12 pt-4 pb-4">
		    						<h1>{this.state.post.title.rendered}</h1>
		    						
									<div className="row mb-5">
										<div className="col-md-6 float-md-left">
											<p className="date">PUBLISHED: {prettyDate}</p>
										</div>

										<div className="text-size clearfix float-md-right col-md-6 mt-4">
											<a href="#" className="control float-left float-md-right plus">Plus</a>
											<span className="float-left float-md-right pl-3 pr-3">Text Size</span>
											<a href="#" className="float-left control minus float-md-right">Minus</a>
										</div>
									</div>

									{Parser(this.state.post.content.rendered)}
									
								</article>
		    					
								<div className="col-md-12 raisebook-block pt-5 pb-5 text-center">
									<div className="row">
										<div className="col-lg-4">
											<a href="#"><img src={RaisebookLogo} className="img-fluid" /></a>
										</div>

										<div className="col-lg-4 align-wrapper offset-lg-1">
											<p className="align-bottom">Are you a sophisticated investor?</p>
										</div>

										<div className="col-lg-3 align-wrapper text-left">
											<div className="align-bottom">
												<a href="#" className="btn btn-secondary border-0">Find out more</a>
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