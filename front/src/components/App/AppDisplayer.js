import React, {Component} from 'react';
import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';

import NESLanding from '../NES/Landing/Landing';
import NESAbout from '../NES/About/About';
import NESResume from '../NES/Resume/Resume';
import { Footer } from '../NES/Footer/Footer';
import NESPortfolio from '../NES/Portfolio/Portfolio';

import BulmaLanding from '../Bulma/Landing/Landing';

class AppDisplayer extends Component {
  render() {
    const {navbar, classes, scrollValue, getActiveCSS} = this.props;

    if (getActiveCSS() === 'nes') {
      return (
        <>
          {navbar}
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
      return (
        <>
          {navbar}
          <BulmaLanding/>
        </>
      )
    }
  }
}

export default CSSTranslate(AppDisplayer);
