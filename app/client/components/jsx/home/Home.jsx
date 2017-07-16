import React from 'react';
import VideoBanner from './../home/VideoBanner.jsx'
import SubscribeFormOptions from './../subscribe-forms/SubscribeFormOptions.jsx'
import LatestArticlePanel from './../home/LatestArticlePanel.jsx';
import DarkSubSitePanel from './../home/DarkSubSitePanel.jsx';
import ImageScanner from './../helpers/ImageScanner.jsx';

// This function automates the import of images
// @param folder_path
// @param keep_paths
// @param extensions_to_scan
// @return array['image_name' => image_path]
const logos = ImageScanner(require.context('../../images/logos', false, /\.(png|jpe?g|svg)$/));
const banners = ImageScanner(require.context('../../images/banners', false, /\.(png|jpe?g|svg)$/));

/*
  Renders the Home Page content
  @extends React.Component
  @function render()
  @return HTML
  @export default
*/
export default class Home extends React.Component {
  render() {
    return (
      <main id="home" className="home page-template page-template-landing page-template-landing-php page page-id-829 blog-1 with-alert">
        <VideoBanner logo={logos['ni.svg']} />

        <div className="dark get-updates" id="keep-me-informed">
          <div className="container">
            <SubscribeFormOptions />
          </div>
        </div>

        <LatestArticlePanel logo={logos['nmb.svg']} name="Next Mining Boom" slug="nmb-panel" />

        <DarkSubSitePanel name="Next Mining Boom" description="The Next Mining Boom is your comprehensive source of information for junior stocks in the mining sector. Find out the latest on gold and lithium stocks, and everything in between." />

        <LatestArticlePanel logo={logos['nor.svg']} name="Next Oil Rush" slug="nor-panel" />

        <DarkSubSitePanel name="Next Oil Rush" description="The Next Oil Rush drills down to the core of what makes a junior oil stock successful. We offer investors insight into market sentiment and the oil and gas stocks to watch in Australia and overseas." />

        <LatestArticlePanel logo={logos['nts.svg']} name="Next Tech Stock" slug="nts-panel" />

        <DarkSubSitePanel name="Next Tech Stock" description="We take you behind the scenes and help you engage with up and coming small cap tech stocks." />

        <LatestArticlePanel logo={logos['nsc.svg']}  name="Next Small Cap" slug="nsc-panel" />

        <DarkSubSitePanel name="Next Small Cap" description="The Next Small Cap puts you in the small cap investment information chain, offering small cap investment news for the investor who likes to stay informed." />

        <LatestArticlePanel logo={logos['nbt.svg']} name="Next Biotech" slug="nbt-panel" />

        <DarkSubSitePanel name="Next Biotech" description="From technology to marvelous medical cures, The Next Biotech informs investors about up and coming biotech stocks and the good work they are doing in the medical innovation space." />

        <LatestArticlePanel logo={logos['raisebook.svg']} name="Raisebook" slug="raisebook-panel" />

      </main>
    );
  }
}