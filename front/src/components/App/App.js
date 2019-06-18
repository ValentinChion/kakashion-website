import React, {Component} from 'react';
import AppDisplayer from './AppDisplayer';

import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';
import Translation from '../HOC/Translation/Translation';
import {getActiveCSS} from '../../utils/CSS';
import './App.css';
import './blocks.scss';


class App extends Component {
  state = {
    navbar: '',
    scrollValue: 0,
    isVisibleLanding: true,
  };

  componentDidMount() {
    if (getActiveCSS() === 'nes') {
      window.addEventListener('scroll', this.listenToScroll);
    }

    if (!this.props.getActiveLanguage()) {
      this.props.setLanguage('fr');
    }
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

  LandingVisibility = (isVisible) => {
    this.setState({
      isVisibleLanding: isVisible
    })
  }

  render() {
    return (
      <AppDisplayer navbar={this.state.navbar} 
                    scrollValue={this.state.scrollValue}
                    isVisibleLanding={this.state.isVisibleLanding}
                    LandingVisibility={this.LandingVisibility}
      />
    );
  }
}

export default Translation(CSSTranslate(App));
