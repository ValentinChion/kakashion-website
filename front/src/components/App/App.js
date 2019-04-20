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
    scrollValue: 0,
  };

  componentDidMount() {
    if (getActiveCSS() === 'bulma') {
      this.setState({navbar: <BulmaNavbarDisplayer/>})
    } else {
      this.setState({navbar: <NesNavbarDisplayer/>})
    }

    window.addEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      scrollValue: scrolled,
    })

  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  render() {
    return (
      <AppDisplayer navbar={this.state.navbar} scrollValue={this.state.scrollValue}/>
    );
  }
}

export default CSSTranslate(App);
