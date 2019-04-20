import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';

class Portfolio extends Component {
  render() {
    return (
      <div style={{'margin-top': '16vw'}} className="gap-header" name="Portfolio">
        <div className="nes-container with-title container">
          <h3 className="title">All my work in a nutshell</h3>
        </div>
      </div>
    );
  }
}

export default CSSTranslate(Portfolio);
