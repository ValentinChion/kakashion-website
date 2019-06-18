import React, {Component} from 'react';
import kakashion from '../../../utils/images/kakashion.png';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import DisplayTrigger from '../../NES/DisplayTrigger/DisplayTrigger';

class NavbarDisplayer extends Component {
  render() {
    const {isVisibleLanding} = this.props;
    console.log(isVisibleLanding);
    let TriggerVisibility = isVisibleLanding ? "is-active" : ""
    return (
      <>
        <div className="tabs is-centered is-medium fixed-position">
          <div className="container-logo">
            <img src={kakashion} className="is-a-logo" width="80"/>
          </div>
          <ul>
            <li className={TriggerVisibility}><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Resume</a></li>
          </ul>
        </div>
      </>
  );
  }
  }

  export default CSSTranslate(NavbarDisplayer);

  /*<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <div className="navbar-item">
      <img src={kakashion} className="is-a-logo"/>
    </div>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
       data-target="navbarBasicExample">
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <DisplayTrigger/>
      </div>
    </div>
  </div>
</nav>*/