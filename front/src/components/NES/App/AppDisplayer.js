import React, {Component} from 'react';
import Test from '../DisplayTrigger/DisplayTrigger';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Resume from '../Resume/Resume';
import { Footer } from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';

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
          <Portfolio/>
        </div>
        <Footer scrollValue={scrollValue}/>
      </>
    );
  }
}

export default CSSTranslate(AppDisplayer);
