import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import LandingDisplayer from './LandingDisplayer';

class Landing extends Component {
  render() {
    return (
      <LandingDisplayer/>
    );
  }
}

export default CSSTranslate(Landing);
