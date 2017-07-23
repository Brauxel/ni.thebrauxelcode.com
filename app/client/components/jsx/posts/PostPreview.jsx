import React from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import PreviewImage from './../preview-image/PreviewImage.jsx';

export default class extends React.Component {
	constructor(props) {
		super(props);
    	this.state = { site: this.props.site }

    	console.log('post-preview-constructor' + this.props.site);
	}

  	componentWillReceiveProps(nextProps, nextState) {
    	this.setState({site: nextProps.site});
    	console.log("post-preiview-componentWillReceiveProps-"+ this.state.site);
 	}

	render() {
		console.log('post-preiview-render = ' + this.props.site);
		return(
			<article className="row blog-brief pt-5 pb-5">
				<div className="col-md-2">
					<Link to={"/post/" + this.props.data.slug}><PreviewImage mediaId={this.props.data.featured_media} site={this.state.site} /></Link>
				</div>
									
				<div className="col-md-9 synopsis pt-4 pb-4">
					<h2><Link to={"/next-mining-boom/" + this.props.data.slug}>{this.props.data.title.rendered}</Link></h2>
					<p className="date">Apr 4, 2017</p>
					{Parser(this.props.data.excerpt.rendered)}
					<a href="#" className="btn btn-outline-primary float-right mt-5">Read Article</a>
				</div>
	    	</article>
		);
	}
}