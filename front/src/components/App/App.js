import React, {Component} from 'react';
import AppDisplayer from './AppDisplayer';

import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';
import Translation from '../HOC/Translation/Translation';
import '../../style/nes-enhance.css';
import '../../style/blocks.scss';


class App extends Component {
  state = {
    navbar: '',
    scrollValue: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);

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

  render() {
    return (
      <AppDisplayer scrollValue={this.state.scrollValue}
      />
    );
  }
}

export default Translation(CSSTranslate(App));
