import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import kakashionCV from './../../utils/CV/CV_CHION_Valentin.pdf';

class About extends Component {
  render() {
    return (
      <div className='gap-header' name="About">
        <div className='nes-container with-title container'>
          <h3 className='title'>What about me ?</h3>
          <section className="message-list">
            <section className="message -left has-background-white">
              <i className='nes-charmander is-flipped'/>
              <div className="nes-balloon from-left">
                <p>I am a junior web developper with a year of experience thanks to a great formation and personal
                  projects</p>
              </div>
            </section>

            <section className="message -right has-background-white">
              <div className="nes-balloon from-right">
                <p>I also have 9 months of professional experience in data integration using Talend-Studio & Talend
                  MDM.</p>
              </div>
              <i className="nes-bulbasaur"/>
            </section>

            <section className="message -left has-background-white">
              <i className='nes-charmander is-flipped'/>
              <div className="nes-balloon from-left">
                <p>I have solid bases in <span
                  className='nes-text is-primary'>HTML5, CSS3, JavaScript, NodeJS</span> but also in <span
                  className='nes-text is-primary'>ReactJS, Express</span> to give efficient solution to web problems</p>
              </div>
            </section>
          </section>
        </div>
        <div className='nes-container with-title container'>
          <h3 className='title'>More info</h3>
          <div className="lists">
            <ul className="nes-list is-disc">
              <li><span className='nes-text is-primary'>Age:</span> 22 Years</li>
              <li><span className='nes-text is-primary'>Nationality:</span> French</li>
              <li><span className='nes-text is-primary'>Email:</span> valentin.chion@gmail.com</li>
              <li><span className='nes-text is-primary'>Phone:</span> +33 6 15 40 10 37</li>
              <li><span className='nes-text is-primary'>Address:</span> 114 Rue Eugène Jacquet, Lille 59800</li>
            </ul>
          </div>
          <a href={kakashionCV} download='CV_CHION_Valentin' className='nes-btn is-large'>My CV</a>
        </div>
      </div>
    );
  }
}

export default CSSTranslate(About);
