import React, {Component} from 'react';
import Test from '../Test/Test';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import Landing from '../Landing/Landing';

class AppDisplayer extends Component {
  render() {
    const {navbar, classes} = this.props;
    return (
      <>
        {navbar}
        <div className={classes.layout}>
          <Landing/>
          <Test/>
        </div>
      </>
    );
  }
}

export default CSSTranslate(AppDisplayer);
