import React from 'react';
import Axios from 'axios';
//import $ from "jquery";
//var querystring = require('querystring');
import Parser from 'html-react-parser';


/*
  Renders the Subscription Form
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class SubscribeFormOptionLess extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			formErrors: {email: '', name: ''}, //An object with the input field names as keys and any validation errors as their values
    		emailValid: false, //Boolean property which we’ll use to enable or disable the form submit button, based on our validation results
    		nameValid: false, //Boolean property which we’ll use to enable or disable the form submit button, based on our validation results
    		formValid: false, //Boolean property which we’ll use to enable or disable the form submit button, based on our validation results
    		message: '',
    		status: '',
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState(
			{[name]: value}, //setState to update input field values in the form
			() => { this.validateField(name, value) } //The setState method takes a callback function as a second argument, so let’s pass a validation function to it
		);
	}

	validateField(fieldName, value) {
	  let fieldValidationErrors = this.state.formErrors;
	  let emailValid = this.state.emailValid;
	  let nameValid = this.state.nameValid;

	  switch(fieldName) {
	    case 'email':
	      // For the email field, we check it against a regular expression to see if it’s an email. 
	      emailValid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
	      break;
	    case 'name':
	      nameValid = value.length >= 6;
	      fieldValidationErrors.name = nameValid ? '': ' is too short';
	      break;
	    default:
	      break;
	  }

	  this.setState({formErrors: fieldValidationErrors,
	                  emailValid: emailValid,
	                  nameValid: nameValid
	                }, this.validateForm);
	}

	validateForm() {
	  this.setState({formValid: this.state.emailValid && this.state.nameValid});
	}

 	handleSubmit(event) {
		let values = {input_values : {input_1 : 'Testing2', input_11 : 'test@gmail.com'}}
		let values_json = JSON.stringify(values);
		let message = '', status = '';
    	let _this = this;

		/*$.post('http://nextinvestors.thebrauxellamp.com/next-mining-boom/gravityformsapi/forms/45/submissions?api_key=00fe4fea99&signature=Lw7yTeP%2BiqzzSeC2qSlNsoAcb74%3D&expires=1500944348', values_json, function(data){
		    console.log(data.response);
		});*/

		Axios.post('http://nextinvestors.thebrauxellamp.com/next-mining-boom/gravityformsapi/forms/45/submissions?api_key=00fe4fea99&signature=Lw7yTeP%2BiqzzSeC2qSlNsoAcb74%3D&expires=1500944348', values_json)
		  .then(function (response) {
		    console.log(response);
		    message = response.data.response.confirmation_message;
		    status= response.status;
		    console.log(status);
		    console.log(message);

      		_this.setState({message: message, status: status});
		  })
		  .catch(function (error) {
		    console.log(error);
		});

		console.log('in');

    	event.preventDefault();
  	}

	render() {
		// ButtonStyles to light up the submit button on valid inputs
		let buttonStyles = this.state.formValid ? 'btn btn-secondary mt-4 border-0 active' : 'btn btn-secondary mt-4 border-0 disabled';
		let formStyles = this.state.status ? 'hider mt-4' : 'mt-4';
		let message = this.state.message;

		if(message) {
			console.log('message');
		} else {
			console.log('no wss');
		}

		return(
			<div>
			    {message && Parser(message)}

				<form className={formStyles} onSubmit={this.handleSubmit.bind(this)} type="POST">
					<div className="row">
						<div className="col-md-12">
							<p>Be alerted as soon as an article is released - Join our mailing list (FREE)</p>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
			    			<input type="text" className="form-control mb-3" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} required />
			    		</div>

			    		<div className="col-md-6">
			    			<input type="email" className="form-control mb-3" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
			    		</div>
		    		</div>

		    		<div className="row">
		    			<div className="col-md-12">
		    				<button className={buttonStyles} type="submit" disabled={!this.state.formValid}>Please keep me informed</button>
		    			</div>
		    		</div>
				</form>
			</div>
		);
	}
}