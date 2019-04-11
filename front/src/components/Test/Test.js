import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';

class Test extends Component {
  render() {
    const {classes, toggleCSSFramework} = this.props;
    return (
      <div className={classes.button} onClick={toggleCSSFramework}>Coucou frr</div>
    );
  }
}

export default Test = CSSTranslate(Test);
