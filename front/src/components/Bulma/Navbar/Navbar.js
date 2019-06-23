import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import NavbarDisplayer from './NavbarDisplayer';

class Navbar extends Component {
  render() {
    const {isVisibleLanding} = this.props;
    return (
      <div>
        <NavbarDisplayer isVisibleLanding={isVisibleLanding}/>
      </div>
    );
  }
}

export default CSSTranslate(Navbar);
