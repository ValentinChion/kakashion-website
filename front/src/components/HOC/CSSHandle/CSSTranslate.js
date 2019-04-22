import React, {Component} from 'react';
import {CSSBulma, CSSNes, getActiveCSS, setCSS} from '../../../utils/CSS';

function CssTranslate(WrappedComponent) {
  return class extends Component {
    state = {
      classes: {}
    };

    componentDidMount() {
      if (getActiveCSS() === 'bulma') {
        setCSS('bulma');
        this.setState({classes: CSSBulma})
      } else {
        setCSS('nes');
        this.setState({classes: CSSNes})
      }
    }

    toggleCSSFramework = () => {
      getActiveCSS() === 'bulma' ? setCSS('nes') : setCSS('bulma');
    };

    render() {
      return <WrappedComponent classes={this.state.classes}
                               toggleCSSFramework={this.toggleCSSFramework}
                               {...this.props}/>
    }
  }
}

export default CssTranslate;
