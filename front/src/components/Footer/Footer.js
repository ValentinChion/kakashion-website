import React, { Component } from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';

export class Footer extends Component {
  render() {
    return (
      <div className="nes-footer">
        <progress class="nes-progress" value="90" max="100" />
      </div>
    )
  }
}

export default CSSTranslate(Footer);
