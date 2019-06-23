import React, {Component} from 'react';
import {getActiveCSS, setCSS} from '../../../utils/CSS';

function CssTranslate(WrappedComponent) {
  return class extends Component {
    state = {
      classes: {}
    };

    componentDidMount() {
      if (getActiveCSS() === 'bulma') {
        setCSS('bulma');
      } else {
        setCSS('nes');
      }
    }

    toggleCSSFramework = () => {
      getActiveCSS() === 'bulma' ? setCSS('nes') : setCSS('bulma');
    };

    render() {
      return <WrappedComponent classes={this.state.classes}
                               toggleCSSFramework={this.toggleCSSFramework}
                               getActiveCSS={getActiveCSS}
                               {...this.props}/>
    }
  }
}

export default CssTranslate;
