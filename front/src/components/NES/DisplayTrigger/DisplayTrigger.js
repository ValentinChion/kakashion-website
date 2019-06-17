import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Translation from '../../HOC/Translation/Translation';

class DisplayTrigger extends Component {
  render() {
    const {classes, toggleCSSFramework, text} = this.props;
    return (
      <div className={"nes-btn nes-theme-button"} onClick={toggleCSSFramework}>{text.displayTriggerNES}</div>
    );
  }
}

export default DisplayTrigger = Translation(CSSTranslate(DisplayTrigger));
