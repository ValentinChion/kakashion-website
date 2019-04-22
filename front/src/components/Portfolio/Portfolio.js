import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';
import NesCard from './NesCard';
import clalogo from './../../utils/images/portfolio/CLA_logo.png';
import articles from './../../utils/images/portfolio/articles.png';
import gamerlife from './../../utils/images/portfolio/gamer-life.png';
import apprenticeship from './../../utils/images/portfolio/apprenticeship.png';
import irate from './../../utils/images/portfolio/iRate.png';

class Portfolio extends Component {
  render() {
    return (
      <div style={{'margin-top': '16vw'}} className="gap-header" name="Portfolio">
        <div className="nes-container with-title container">
          <h3 className="title">All my work in a nutshell</h3>
          <div className="nes-card-container">
            <NesCard title={'CLA webapp'} imgsource={clalogo} link={'https://github.com/ValentinChion/cawebsite'}/>
            <NesCard title={'To-do list'} imgsource={articles} link={'https://github.com/NansD/articles'}/>
            <NesCard title={'PWA'} imgsource={gamerlife} link={'https://github.com/ValentinChion/gamerlife'}/>
            <NesCard title={'Slideshow'} imgsource={apprenticeship}
                     link={'https://github.com/ValentinChion/apprenticeship-presentation'}/>
            <NesCard title={'iRate web app'} imgsource={irate} link={'https://github.com/EBM2018/iRate'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSTranslate(Portfolio);
