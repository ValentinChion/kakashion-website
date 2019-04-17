import React, { Component } from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';

export class Footer extends Component {
  render() {
    return (
      <progress class="nes-progress" value="90" max="100"></progress>
    )
  }
}

export default CSSTranslate(Footer);
