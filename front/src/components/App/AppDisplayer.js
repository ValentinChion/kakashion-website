import React, {Component} from 'react';
import Test from '../Test/Test';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import Landing from '../Landing/Landing';
import About from '../About/About';

class AppDisplayer extends Component {
  render() {
    const {navbar, classes} = this.props;
    return (
      <>
        {navbar}
        <Landing/>
        <div className={classes.layout}>
          <About/>
          <Test/>
        </div>
      </>
    );
  }
}

export default CSSTranslate(AppDisplayer);
