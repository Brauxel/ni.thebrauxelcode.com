import React from 'react';
//import Logo from './Logo.jsx';
import Nav from './../menus/Nav.jsx';
import SearchForm from './../search/SearchForm.jsx';

let mainLinks = [
    { name: 'Home', url: '/', slug: 'home'},
    { name: 'Mining Boom', url: '/next-mining-boom', slug: 'nmb'},
    { name: 'Oil Rush', url: '/the-next-oil-rush', slug: 'nor'},
    { name: 'Tech Stock', url: '/next-tech-stock', slug: 'nts'},
    { name: 'Small Cap', url: '/next-small-cap', slug: 'nsc'},
    { name: 'Biotech', url: '/next-biotech', slug: 'nbt'}    
];

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
        this.state = { menu: false };

        this.clicked = this.clicked.bind(this);
    }
    clicked(index) {
        // The click handler will update the state with the index of the focused menu entry
        //this.state.focused: 1;
        this.setState({menu: !this.state.menu});
    }

    render () {
        let navStyles = this.state.menu ? 'align-wrapper show': 'align-wrapper';
        let buttonStyles = this.state.menu ? 'nav-toggle float-right border-0 nav-close': 'nav-toggle float-right border-0';

        return (
            <header className="fixed-top w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <Nav items={mainLinks} styles={navStyles} />
                        </div>

                        <div className="col-sm-3 toggler">
                            <button onClick={this.clicked} className={buttonStyles} type="button" data-toggle="collapse" data-target="#navbarsExampleCenteredNav" aria-controls="navbarsExampleCenteredNav" aria-expanded="false" aria-label="Toggle navigation"><span aria-label="Mobile Menu Icon"></span></button>
                            
                            <div className="navbar-right">
                                <SearchForm />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}