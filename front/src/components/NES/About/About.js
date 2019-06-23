import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import kakashionCV from '../../../utils/CV/CV_CHION_Valentin.pdf';
import Translation from '../../HOC/Translation/Translation';

class About extends Component {
  render() {
    const {text} = this.props;
    return (
      <div className='gap-header' name="About">
        <div className='nes-container with-title container'>
          <h3 className='title'>{text.about.title}</h3>
          <section className="message-list">
            <section className="message -left has-background-white">
              <i className='nes-charmander is-flipped'/>
              <div className="nes-balloon from-left">
                <p>{text.about.messageOne}</p>
              </div>
            </section>

            <section className="message -right has-background-white">
              <div className="nes-balloon from-right">
                <p>{text.about.messageTwo}</p>
              </div>
              <i className="nes-bulbasaur"/>
            </section>

            <section className="message -left has-background-white">
              <i className='nes-charmander is-flipped'/>
              <div className="nes-balloon from-left">
                <p>{text.about.messageThree.one} <span
                  className='nes-text is-primary'>{text.about.messageThree.two} </span> {text.about.messageThree.three}
                  <span
                    className='nes-text is-primary'> {text.about.messageThree.four} </span> {text.about.messageThree.five}
                </p>
              </div>
            </section>
          </section>
        </div>
        <div className="gap-header" name="Contact"/>
        <div className='nes-container with-title container'>
          <h3 className='title'>{text.more.title}</h3>
          <div className="lists">
            <ul className="nes-list is-disc">
              <li><span className='nes-text is-primary'>{text.more.age.label}</span>{text.more.age.info}</li>
              <li><span className='nes-text is-primary'>{text.more.nationality.label}</span>{text.more.nationality.info}
              </li>
              <li><span className='nes-text is-primary'>{text.more.email.label}</span>{text.more.email.info}</li>
              <li><span className='nes-text is-primary'>{text.more.phone.label}</span>{text.more.phone.info}</li>
            </ul>
          </div>
          <a href={kakashionCV} download='CV_CHION_Valentin' className='nes-btn is-large'>My CV</a>
        </div>
      </div>
    );
  }
}

export default Translation(CSSTranslate(About));
