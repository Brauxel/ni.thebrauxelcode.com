import React from 'react';
import SubscribeFormOptionLess from './SubscribeFormOptionLess.jsx';
import SecondaryMenu from './SecondaryMenu.jsx';

export default class Footer extends React.Component {
	render() {
		return(
			<footer>
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-md-3 mt-5">
	    					<h4>Share</h4>
	    				</div>
	    				
	    				<div className="col-md-3 mt-5">
	    					<h4>Links</h4>

	    					<SecondaryMenu />
	    				</div>
	    				
	    				<div className="col-md-4 float-right mt-5 offset-md-2">
	    					<h4>Follow Next Investors</h4>
	    					<p>Interested in more investment opportunities?<br />To receive ALL our alerts fill out your details below.</p>
	    					<SubscribeFormOptionLess />
	    				</div>
	    			</div>
	    			
	    			<div className="row sub-footer mt-5">
	    				<div className="col-md-12 text-center mt-5">
	    					<p>The information in this website is general information only. Any advice is general advice only. Your personal objectives, financial situation or needs have not been taken into consideration. Accordingly you should consider how appropriate the advice (if any) is to those objectives, financial situation and needs, before acting on the advice. S3 Consortium Pty Ltd (CAR No.433913) is a corporate authorised representative of Longhou Capital Markets Pty Ltd (AFSL No. 292464).</p><br /><br />
							<p>©2017 S3 Consortium Pty Ltd</p>
	    				</div>
	    			</div>
	    		</div>
    		</footer>
		);
	}
}