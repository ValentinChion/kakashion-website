import React, {Component} from 'react';
import Test from '../Test/Test';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import Landing from '../Landing/Landing';
import About from '../About/About';
import { Resume } from '../Resume/Resume';
import { Footer } from '../Footer/Footer';

class AppDisplayer extends Component {
  
  render() {
    const {navbar, classes, scrollValue} = this.props;
    return (
      <>
        {navbar}
        <Landing/>
        <div className={classes.layout}>
          <About/>
          <Resume/>
          <Test/>
        </div>
        <Footer scrollValue={scrollValue}/>
      </>
    );
  }
}

export default CSSTranslate(AppDisplayer);
