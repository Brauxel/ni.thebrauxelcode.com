import React from 'react';

export default class SubscribeFormOptions extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Please enter your name',
			email: 'Please enter your email'
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

 	handleSubmit(event) {
    	//alert('A name was submitted: ' + this.state.email);

    	var xmlhttp = new XMLHttpRequest();
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
								<input className="form-control" placeholder="Name" name="name" type="text" value={this.state.name} onChange={this.handleChange} required />
							</div>

							<div className="col-sm-6">
								<input className="form-control" placeholder="Email" name="email" type="text" value={this.state.email} onChange={this.handleChange} required />
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-lg-12">
						<button className="btn btn-outline-primary disabled" type="submit">Keep me informed about all next investor articles</button>
					</div>
				</div>
			</form>
		);
	}
}