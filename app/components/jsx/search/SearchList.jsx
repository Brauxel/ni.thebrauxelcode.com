import React from 'react';
import SearchForm from './SearchForm.jsx';
import SearchItem from './SearchItem.jsx';

export default class extends React.Component {
	render() {
		return(
			<main id="search">
				<div className="container">
					<div className="row mt-5">
		    			<div className="col-lg-12">
							<div className="row">
								<div className="col-md-6 mb-3">
									<h1>Site Search</h1>
								</div>
								
								<div className="col-md-6 results-search-form-holder">
									<SearchForm />
								</div>
							</div>

							<section className="articles">
								<SearchItem />
								<SearchItem />
								<SearchItem />
							</section>
		    			</div>
		    		</div>
				</div>
			</main>
		);
	}
}