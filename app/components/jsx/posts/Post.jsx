import React from 'react';
import Sidebar from './../globals/Sidebar.jsx';
import SubscribeForm from './../subscribe-forms/SubscribeFormOptionLess.jsx';
import RaisebookLogo from './../../images/logos/raisebook.svg';

export default class Post extends React.Component {
	render() {
		return(
			<main id="post">
				<div className="jumbotron banner">
		    		<section className="banner-content align-middle">
		    			<div className="inner">
		    				<div className="container">
		    					<div className="row">
		    						<div className="col-xl-5 mb-5">
		    							<img className="img-fluid" src={this.props.logo} alt="" title="" />
		    						</div>
		    							
		    						<div className="col-xl-7">
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
		    						<h1>PSM Adds Zinc Assets to its South Korean Metals Portfolio</h1>
		    						
									<div className="row mb-5">
										<div className="col-md-6 float-md-left">
											<p className="date">FINALISED: 04-04-17 PUBLISHED: 04-04-17</p>
										</div>

										<div className="text-size clearfix float-md-right col-md-6 mt-4">
											<a href="#" className="control float-left float-md-right plus">Plus</a>
											<span className="float-left float-md-right pl-3 pr-3">Text Size</span>
											<a href="#" className="float-left control minus float-md-right">Minus</a>
										</div>
									</div>
									
									<p>It’s all systems go at Peninsula Mines (ASX: PSM) as we move into the second quarter of 2017.</p>
									<p>
									As we mentioned in
									<a href="http://www.nextminingboom.com/psm-post-high-grade-graphite-results-battery-hub-south-korea/" target="_blank">our previous article</a>
									on this ASX-dwelling Asian interloper, PSM is already on-track to deliver a graphite/lithium option in the high tech hub of South Korea.
									</p>
									<p>
									In fact the company has just gained direct Korean government support through the Korean Resources Corporation (KORES), as a
									<a href="http://www.asx.com.au/asxpdf/20170330/pdf/43h4kw7zt29r5f.pdf" target="_blank">co-funder of 200 metres of an 1,100 metre drilling program</a>
									at its Yongwon Graphite Project.
									</p>
									<p>While access approval is still required, it is believed the co-funding will support the drilling application. Drilling will then be aimed at defining an Indicated Resource to be subjected to initial economic development studies.</p>
									<p>Government support in South Korea is vital to PSM’s polymetallic ambitions.</p>
									<h2>South Korea is home to tech giants Samsung, Hyundai and LG Electronics, all of whom currently have a need for lithium-ion batteries to help power their cars and other high-tech gadgets.</h2>
									<p>And graphite is a major component of lithium ion batteries…</p>
									<p>PSM hopes it can fast track its exploration projects to be part of the new energy paradigm, and it is certainly on its way with its graphite play.</p>
									<p>
									But what has us updating our readers in this edition of
									<em>The Next Mining Boom</em>
									, is the prospect of PSM scooping something value generative from its zinc assets – also located in South Korea – in the coming months.
									</p>
									<p>The company’s zinc project now has its first three key tenements officially granted, part of a large area of applications, following high-grade assay results for zinc and a spectrum of other metals. </p>
									<p>The latest progress on its zinc project allows PSM to fast-track surface geochemistry and IP geophysics to define several drilling targets within a large, 2km x 2km prospective area.</p>
									<p>Although it should be noted here that PSM is still an early stage play and a speculative investment. Investors considering this stock should bear this in mind and seek professional financial advice before making an investment decision.</p>
									<p>All in all, we think PSM is doing everything a small-cap explorer should — stitching together a neat portfolio of in-demand commodities and applying the necessary fieldwork to commercialise it, for the benefit of early investors.</p>
									<p>With the share price primed at bargain-basement levels around $0.02 (2 cents/share), we think PSM could be in-line for a change of fortunes, especially as the metals resurgence continues full steam ahead.</p>
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