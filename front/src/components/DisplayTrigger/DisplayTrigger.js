import React, {Component} from 'react';
import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';
import Translation from '../HOC/Translation/Translation';

class DisplayTrigger extends Component {
  render() {
    const {toggleCSSFramework, text, getActiveCSS} = this.props;

    if (getActiveCSS() === 'nes') {
      return (
        <div className={'nes-btn nes-theme-button'} onClick={toggleCSSFramework}>{text.displayTriggerNES}</div>
      );
    } else {
      return (
        <div className="button" onClick={toggleCSSFramework}>{text.displayTriggerBulma}</div>
      );
    }
  }
}

export default DisplayTrigger = Translation(CSSTranslate(DisplayTrigger));
