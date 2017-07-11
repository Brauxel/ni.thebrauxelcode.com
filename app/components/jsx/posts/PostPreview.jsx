import React from 'react';
import Parser from 'html-react-parser';
import { Link } from 'react-router';
import PreviewImage from './../preview-image/PreviewImage.jsx';

export default class extends React.Component {
	render() {
		return(
			<article className="row blog-brief pt-5 pb-5">
				<div className="col-md-2">
					<a href="#"><PreviewImage mediaId={this.props.data.featured_media} /></a>
				</div>
									
				<div className="col-md-9 synopsis pt-4 pb-4">
					<h2><a href="#">{this.props.data.title.rendered}</a></h2>
					<p className="date">Apr 4, 2017</p>
					{Parser(this.props.data.excerpt.rendered)}
					<a href="#" className="btn btn-outline-primary float-right mt-5">Read Article</a>
				</div>
	    	</article>
		);
	}
}