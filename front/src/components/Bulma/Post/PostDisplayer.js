import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Translation from '../../HOC/Translation/Translation';

class PostDisplayer extends Component {
  render() {
    const {title, subtitle, content} = this.props;
    return (
      <div className="section">
        <div className="post-header">
          <h4 className="title is-4">
            {title}
          </h4>
          <h5 className="subtitle is-5">
            {subtitle}
          </h5>
        </div>
        <div className="post-content">
          <p>
            {content}
          </p>
        </div>
      </div>
    );
  }
}

export default Translation(CSSTranslate(PostDisplayer));
