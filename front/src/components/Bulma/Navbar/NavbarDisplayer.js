import React, {Component} from 'react';
import kakashion from '../../../utils/images/kakashion.png';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import {Link} from 'react-scroll/modules';

class NavbarDisplayer extends Component {
  render() {

    return (
      <>
        <div className="tabs is-centered is-medium fixed-position">
          <div className="container-logo">
            <img src={kakashion} className="is-a-logo" width="80"/>
          </div>
          <ul>
            <li><Link to='Home' spy={true} smooth={true} duration={500}>Home</Link></li>
            <li><Link to='About' spy={true} smooth={true} duration={500}>About</Link></li>
            <li><a>Resume</a></li>
          </ul>
        </div>
      </>
  );
  }
  }

  export default CSSTranslate(NavbarDisplayer);
