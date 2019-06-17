import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import kakashion from '../../../utils/images/kakashion.png';
import {Link} from 'react-scroll';
import Translation from '../../HOC/Translation/Translation';

class NesNavbarDisplayer extends Component {
  render() {
    const {text} = this.props;
    return (
      <header className="nes-header">
        <div className="container">
          <img src={kakashion} className="nes-logo-header"
               alt='website and personnal logo, we can see kakashi as flat-design'/>
          <Link to='About' spy={true} smooth={true} duration={500}>
            <div className="nes-badge">
              <span className="nes-is-dark-inverted">
                {text.navbar.first}
              </span>
            </div>
          </Link>
          <Link to='Resume' spy={true} smooth={true} duration={500}>
          <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              {text.navbar.second}
            </span>
          </div>
          </Link>
          <Link to='Portfolio' spy={true} smooth={true} duration={500}>
            <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              {text.navbar.third}
              </span>
            </div>
          </Link>
          <Link to='Contact' spy={true} smooth={true} duration={500}>
            <div className="nes-badge">
            <span className="nes-is-dark-inverted">
              {text.navbar.fourth}
            </span>
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default Translation(CSSTranslate(NesNavbarDisplayer));
