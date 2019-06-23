import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Translation from '../../HOC/Translation/Translation';
import PostDisplayer from '../Post/PostDisplayer';

class AboutDisplayer extends Component {
  render() {
    const {text} = this.props;
    const messageThree = text.about.messageThree.one + " " + text.about.messageThree.two + " " + text.about.messageThree.three + " " + text.about.messageThree.four + " " + text.about.messageThree.five;

    return (
      <section className="hero is-light is-fullheight-with-navbar" name="About">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <PostDisplayer key={1} title={text.about.bulmaOnly.title.one} subtitle={text.about.bulmaOnly.subtitle.one} content={text.about.messageOne}/>
              <PostDisplayer key={102} title={text.about.bulmaOnly.title.two} subtitle={text.about.bulmaOnly.subtitle.two} content={text.about.messageTwo}/>
              <PostDisplayer title={text.about.bulmaOnly.title.three} subtitle={text.about.bulmaOnly.subtitle.three} content={messageThree}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Translation(CSSTranslate(AboutDisplayer));
