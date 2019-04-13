import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import kakashion from './../../utils/images/kakashion.png';

class NesNavbarDisplayer extends Component {
  render() {
    return (
      <header className="nes-header">
        <div className="container">
          <img src={kakashion} className="nes-logo-header"
               alt='website and personnal logo, we can see kakashi as flat-design'/>
          <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              About
            </span>
          </div>
          <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              Resume
            </span>
          </div>
          <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              Portfolio
              </span>
          </div>
          <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              Contact
            </span>
          </div>
        </div>
      </header>
    );
  }
}

export default CSSTranslate(NesNavbarDisplayer);
