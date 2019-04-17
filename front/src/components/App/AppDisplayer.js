import React, {Component} from 'react';
import Test from '../Test/Test';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import Landing from '../Landing/Landing';
import About from '../About/About';
import { Resume } from '../Resume/Resume';

class AppDisplayer extends Component {
  render() {
    const {navbar, classes} = this.props;
    return (
      <>
        {navbar}
        <Landing/>
        <div className={classes.layout}>
          <About/>
          <Resume/>
          <Test/>
        </div>
        
      </>
    );
  }
}

export default CSSTranslate(AppDisplayer);
