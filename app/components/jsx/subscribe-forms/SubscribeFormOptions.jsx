import React from 'react';

/*
  Renders a subscription with options
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class SubscribeFormOptions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			formErrors: {email: '', name: ''}, //An object with the input field names as keys and any validation errors as their values
    		emailValid: false, //Boolean property which we’ll use to enable or disable the form submit button, based on our validation results
    		nameValid: false, //Boolean property which we’ll use to enable or disable the form submit button, based on our validation results
    		formValid: false, //Boolean property which we’ll use to enable or disable the form submit button, based on our validation results
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
    	let xmlhttp = new XMLHttpRequest();
		/*xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };*/

        xmlhttp.open("POST", "send.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("fname=Henry&lname=Ford"); 

    	event.preventDefault();
  	}

	render() {
		// ButtonStyles to light up the submit button on valid inputs
		let buttonStyles = this.state.formValid ? 'btn btn-outline-primary active' : 'btn btn-outline-primary disabled';

		return (
			<form onSubmit={this.handleSubmit} type="POST">
				<div className="row">
					<div className="col-md-12">
						<h3>Recieve Latest Next Investors Updates</h3>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-4">
						<p>Enter your details to stay informed</p>
					</div>

					<div className="col-lg-8">
						<div className="row">
							<div className="col-sm-6">
								<input className="form-control" placeholder="Please enter your name" name="name" type="text" value={this.state.name} onChange={this.handleChange} required />
							</div>

							<div className="col-sm-6">
								<input className="form-control" placeholder="Please enter your email" name="email" type="text" value={this.state.email} onChange={this.handleChange} required />
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-12">
						<button className={buttonStyles} type="submit" disabled={!this.state.formValid}>Keep me informed about all next investor articles</button>
					</div>
				</div>
			</form>
		);
	}
}