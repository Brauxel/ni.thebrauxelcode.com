import React from 'react';
import Axios from 'axios';
import Sidebar from './../globals/Sidebar.jsx';
import Post from './PostPreview.jsx';
import SubscribeForm from './../subscribe-forms/SubscribeFormOptionLess.jsx';
import CurrentStock from './../companies/CurrentStock.jsx';
import RaisebookLogo from './../../images/logos/raisebook.svg';
import ImageScanner from './../helpers/ImageScanner.jsx';

// This function automates the import of images
// @param folder_path
// @param keep_paths
// @param extensions_to_scan
// @return array['image_name' => image_path]
const logos = ImageScanner(require.context('../../images/logos', false, /\.(png|jpe?g|svg)$/));

let parentStylers = {
	'next-mining-boom' : 'blog-9',
	'the-next-oil-rush' : 'blog-10',
	'next-tech-stock' : 'blog-12',
	'next-small-cap' : 'blog-13',	
	'next-biotech' : 'blog-15',
};

let siteLogos = {
	'next-mining-boom' : logos['nmb.svg'],
	'the-next-oil-rush' : logos['nor.svg'],
	'next-tech-stock' : logos['nts.svg'],
	'next-small-cap' : logos['nsc.svg'],	
	'next-biotech' : logos['nbt.svg'],
};

export default class PostsListing extends React.Component {
	constructor(props) {
		super(props);

		//let url = "http://nextinvestors.thebrauxellamp.com/" + this.props.match.params.site  + "/wp-json/wp/v2/posts/";
		//this.state = { "posts": [], total: 0, pages: 0, url: url }
    	//this.getPosts(url);

    	this.state = { "posts": [], total: 0, pages: 0, site: '' }

    	console.log(this.props.match.params.site);
	}

	componentDidMount() {
		let url = "http://nextinvestors.thebrauxellamp.com/" + this.props.match.params.site  + "/wp-json/wp/v2/posts/";
		this.getPosts(url);
		this.setState({site: this.props.match.params.site});
		console.log('componentDidMount');
	}

  	getPosts(url) {
    	let posts = {}, total = 0, pages = 0;
    	let _this = this;

    	Axios.get(url).then(function(response) {
    		console.log(response);
      		posts = response.data;
      		total = parseInt(response.headers['x-wp-total']);
      		pages = parseInt(response.headers['x-wp-totalpages']);

      		_this.setState({posts: posts, total: total, pages: pages});
    	});
    	console.log("getposts");
  	}

  	componentWillReceiveProps(nextProps, nextState){
    	let url = "http://nextinvestors.thebrauxellamp.com/" + nextProps.match.params.site  + "/wp-json/wp/v2/posts/";
		this.getPosts(url);
    	this.setState({site: nextProps.match.params.site});
    	console.log("componentWillReceiveProps-"+ nextProps.match.params.site);
 	}

	render() {
		console.log("render");

		return(
			<main id={parentStylers[this.state.site]} className="home page-template page-template-internal-home page-template-internal-home-php page page-id-1508 blog">
	    		<div className="jumbotron banner">
	    			<div className="overlay">&nbsp;</div>
	    			<section className="banner-content align-middle">
	    				<div className="inner">
	    					<div className="container">
	    						<div className="row">
	    							<div className="col-xl-5 mb-5">
										<a href="#"><img src={siteLogos[this.state.site]} alt="" title="" height="55" /></a>
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
						          {this.state.posts.map(
						            (post) => {
						              return (
						                <Post data={post} key={post.id} site={this.state.site} />
						              )
						            }
						          )}
						          <div className="wp-pagenavi">
						          	<span className="current">1</span>
						          </div>
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