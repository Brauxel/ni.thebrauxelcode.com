import React from 'react';
import ImageScanner from './ImageScanner.jsx';

const tiles = ImageScanner(require.context('../images/tiles', false, /\.(png|jpe?g|svg)$/));

export default class VideoBanner extends React.Component {
  	render() {
    	return (
        <div className="banner" id="video-banner-container">
          <div className="overlay">&nbsp;</div>

          <div id="video-banner" className="video-container">
            <video loop muted autoplay className="the-video" preload="auto">
              <source src="https://s3-ap-southeast-2.amazonaws.com/sdnewsdesk/nextinvestors.mp4" type="video/mp4" />
            </video>
          </div>
        
          <section className="banner-content">
            <div className="wrap">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <h1><a className="logo mx-auto mb-5 pb-5" href="#"><img className="img-fluid" src={this.props.logo} alt="Next Investors" title="Next Investors" /><span>Next Investors</span></a></h1>
                    <p>The Next Investors group of websites are your window into the world of small cap stock investing. Focusing on speculative technology, mining, oil and gas and biotech stocks, Next Investors keeps you up to date with emerging companies and investment trends, and gives you the information to make more informed investment decisions.</p>
                  </div>
                </div>
                      
                <div className="row">
                  <div className="col-sm-12">
                    <p className="space-top">Choose one of the categories below to get insight from a team of experienced industry professionals.</p>
                  </div>
                </div>
                      
                <div className="row tiles">
                  <div className="col-sm-2 tile">
                    <a href="#"><img className="img-fluid tiled-logo" src={tiles['mining.jpg']}/></a>
                    <a href="#" className="title"><img className="img-fluid" src={tiles['nmb-title.png']} /></a>
                  </div>

                  <div className="col-sm-2 tile">
                    <a href="#"><img className="img-fluid tiled-logo" src={tiles['oil.jpg']}/></a>
                    <a href="#" className="title"><img className="img-fluid" src={tiles['nor-title.png']} /></a>
                  </div>

                  <div className="col-sm-2 tile">
                    <a href="#"><img className="img-fluid tiled-logo" src={tiles['small-cap.jpg']}/></a>
                    <a href="#" className="title"><img className="img-fluid" src={tiles['nsc-title.png']} /></a>
                  </div>

                  <div className="col-sm-2 tile">
                    <a href="#"><img className="img-fluid tiled-logo" src={tiles['techstock.jpg']}/></a>
                    <a href="#" className="title"><img className="img-fluid" src={tiles['nts-title.png']} /></a>
                  </div>

                  <div className="col-sm-2 tile">
                    <a href="#"><img className="img-fluid tiled-logo" src={tiles['biotech.jpg']}/></a>
                    <a href="#" className="title"><img className="img-fluid" src={tiles['nbt-title.png']} /></a>
                  </div>

                  <div className="col-sm-2 tile">
                    <a href="#"><img className="img-fluid tiled-logo" src={tiles['raisebook.jpg']} /></a>
                    <a href="#" className="title"><img className="img-fluid" src={tiles['rb-title.png']} /></a>
                  </div>
                </div>                                   
              </div>             
            </div>
          </section>         
        </div>);     
    } 
}
