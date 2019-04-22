import React, { Component } from 'react';
import CSSTranslate from '../HOC/CSSHandle/CSSTranslate';

export class Footer extends Component {
  componentDidMount() {
    console.log(this.props.scrollValue);
  }

  render() {
    return (
      <div className="nes-footer">
        <progress className="progressBar" value={this.props.scrollValue * 100 } max="100" />
      </div>
    )
  }
}

export default CSSTranslate(Footer);
