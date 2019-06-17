import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import NavbarDisplayer from './NavbarDisplayer';

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavbarDisplayer/>
      </div>
    );
  }
}

export default CSSTranslate(Navbar);
