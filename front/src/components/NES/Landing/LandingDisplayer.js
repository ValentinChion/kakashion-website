import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Hello from './Hello';
import frenchFlag from '../../../utils/images/flags/frenchFlag.png';
import englishFlag from '../../../utils/images/flags/englishFlag.png';
import Translation from '../../HOC/Translation/Translation';
import DisplayTrigger from '../DisplayTrigger/DisplayTrigger';

class LandingDisplayer extends Component {
  render() {
    const {toggleLanguage, activeLanguage, text} = this.props;
    return (
      <>
        <div className='nes-hello'>
          <Hello/>
        </div>
        <div className='nes-language'>
          <label onClick={toggleLanguage('fr')}>
            {activeLanguage === 'fr' ? <input type="radio" className="nes-radio" name="answer" checked/> :
              <input type="radio" className="nes-radio" name="answer"/>}
            <span><img src={frenchFlag} className='nes-language-flag' alt={'pixelised French flag'}/></span>
          </label>
          <label onClick={toggleLanguage('en')}>
            {activeLanguage === 'en' ? <input type="radio" className="nes-radio" name="answer" checked/> :
              <input type="radio" className="nes-radio" name="answer"/>}
            <span><img src={englishFlag} className='nes-language-flag'
                       alt={'pixelised English flag'}/> </span>
          </label>
        </div>
        <div className="nes-hero-fullheight is-dark">
          <div className="nes-hero-body">
            <div className="nes-hero-container">
              <p className="nes-title">{text.landing.title}</p>
              <p className="nes-subtitle">{text.landing.subtitle}</p>
              <div>
                <span id='pikachu'/>
                <span id='ash'/>
              </div>
              <DisplayTrigger/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Translation(CSSTranslate(LandingDisplayer));
