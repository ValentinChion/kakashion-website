import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';

class LandingDisplayer extends Component {
  render() {
    return (
      <>
        <section className="hero is-light is-fullheight is-background" name="Home">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                Fullheight hero with navbar
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default CSSTranslate(LandingDisplayer);
