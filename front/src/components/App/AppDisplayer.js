import React, {Component} from 'react';
import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';
import ReactVisibilitySensor from 'react-visibility-sensor'

import NesNavbarDisplayer from '../NES/Navbar/NesNavbarDisplayer';
import NESLanding from '../NES/Landing/Landing';
import NESAbout from '../NES/About/About';
import NESResume from '../NES/Resume/Resume';
import { Footer } from '../NES/Footer/Footer';
import NESPortfolio from '../NES/Portfolio/Portfolio';

import BulmaNavbar from '../Bulma/Navbar/Navbar';
import BulmaLanding from '../Bulma/Landing/Landing';


class AppDisplayer extends Component {
  render() {
    const {navbar, classes, scrollValue, getActiveCSS} = this.props;

    if (getActiveCSS() === 'nes') {
      return (
        <>
          <NesNavbarDisplayer/>
          <NESLanding/>
          <div className={classes.layout}>
            <NESAbout/>
            <NESResume/>
            <NESPortfolio/>
          </div>
          <Footer scrollValue={scrollValue}/>
        </>
      );
    } else {
      const {LandingVisibility, isVisibleLanding} = this.props;
      return (
        <>
          <BulmaNavbar isVisibleLanding={isVisibleLanding}/>
          <ReactVisibilitySensor onChange={LandingVisibility}>
            <BulmaLanding/>
          </ReactVisibilitySensor>
        </>
      )
    }
  }
}

export default CSSTranslate(AppDisplayer);
