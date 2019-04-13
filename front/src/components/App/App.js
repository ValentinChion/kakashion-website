import React, {Component} from 'react';
import './App.css';
import AppDisplayer from './AppDisplayer';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import {getActiveCSS} from '../../utils/CSS';
import BulmaNavbarDisplayer from '../Navbar/BulmaNavbarDisplayer';
import NesNavbarDisplayer from '../Navbar/NesNavbarDisplayer';

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
