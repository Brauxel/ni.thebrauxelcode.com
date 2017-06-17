import React from 'react';
//import Logo from './Logo.jsx';
import Nav from './Nav.jsx';

export default class Header extends React.Component {
    /*
      Base Constructor
      @params props - super()
      @state focused = 0      
      @export default
    */
    constructor(props) {
        // Declare props as super to allow access in render() function
        super(props);

        //Set Initial States
        this.state = { focused: 0 };
    }
    clicked(index) {
        // The click handler will update the state with the index of the focused menu entry
        //this.state.focused: 1;
    }

    render () {
        return (
            <header className="fixed-top w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <Nav />
                        </div>

                        <div className="col-sm-3">
                            <button className="nav-toggle float-right border-0" type="button" data-toggle="collapse" data-target="#navbarsExampleCenteredNav" aria-controls="navbarsExampleCenteredNav" aria-expanded="false" aria-label="Toggle navigation"><span aria-label="Mobile Menu Icon"></span></button>
                            
                            <form className="navbar-form navbar-right" action="#">
                                <input className="form-control" type="text" name="search" placeholder="Search..." />
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}