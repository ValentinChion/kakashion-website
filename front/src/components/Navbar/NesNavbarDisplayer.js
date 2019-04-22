import React, {Component} from 'react';
import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';
import kakashion from './../../utils/images/kakashion.png';
import {Link} from 'react-scroll';

class NesNavbarDisplayer extends Component {
  render() {
    return (
      <header className="nes-header">
        <div className="container">
          <img src={kakashion} className="nes-logo-header"
               alt='website and personnal logo, we can see kakashi as flat-design'/>
          <Link to='About' spy={true} smooth={true} duration={500}>
            <div className="nes-badge">
              <span className="nes-is-dark-inverted">
                About
              </span>
            </div>
          </Link>
          <Link to='Resume' spy={true} smooth={true} duration={500}>
          <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              Resume
            </span>
          </div>
          </Link>
          <Link to='Portfolio' spy={true} smooth={true} duration={500}>
            <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              Portfolio
              </span>
            </div>
          </Link>
          <Link to='Contact' spy={true} smooth={true} duration={500}>
            <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              Contact
            </span>
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default CSSTranslate(NesNavbarDisplayer);
