import React, {Component} from 'react';
import AppDisplayer from './AppDisplayer';
import BulmaNavbarDisplayer from '../Navbar/BulmaNavbarDisplayer';
import NesNavbarDisplayer from '../Navbar/NesNavbarDisplayer';

import CSSTranslate from '../CSSHandle/CSSTranslate';
import {getActiveCSS} from '../../utils/CSS';
import './App.css';
import './blocks.scss';


class App extends Component {
  state = {
    navbar: '',
  };

  componentDidMount() {
    if (getActiveCSS() === 'bulma') {
      this.setState({navbar: <BulmaNavbarDisplayer/>})
    } else {
      this.setState({navbar: <NesNavbarDisplayer/>})
    }
  }

  render() {
    return (
      <AppDisplayer navbar={this.state.navbar}/>
    );
  }
}

export default CSSTranslate(App);
