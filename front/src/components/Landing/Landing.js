import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import Hello from './Hello';

class Landing extends Component {
  render() {
    return (
      <>
        <div className='nes-hello'>
          <Hello/>
        </div>
        <div className="nes-hero-fullheight is-dark">
          <div className="nes-hero-body">
            <div className="nes-hero-container">
              <p className="nes-title">I'm Valentin Chion</p>
              <p className="nes-subtitle">A full-stack developper, and a lot more !</p>
              <div>
                <span id='pikachu'/>
                <span id='ash'/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CSSTranslate(Landing);
