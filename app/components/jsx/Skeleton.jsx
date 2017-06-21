import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

export default class Skeleton extends React.Component {
  render() {
    return (
        <section className="page-template-landing">
          <div className="overlay main-overlay">&nbsp;</div>
          <Header />
          <Home />
          <Footer />
        </section>
    );
  }
}