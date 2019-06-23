import React, {Component} from 'react';
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Translation from '../../HOC/Translation/Translation';
import NesCard from './NesCard';
import clalogo from '../../../utils/images/portfolio/CLA_logo.png';
import articles from '../../../utils/images/portfolio/articles.png';
import gamerlife from '../../../utils/images/portfolio/gamer-life.png';
import apprenticeship from '../../../utils/images/portfolio/apprenticeship.png';
import irate from '../../../utils/images/portfolio/iRate.png';

class Portfolio extends Component {
  render() {
    const {text} = this.props;
    return (
      <div style={{'marginTop': '17vw'}} className="gap-header" name="Portfolio">
        <div className="nes-container with-title container nes-resume">
          <h3 className="title">{text.portfolio.title}</h3>
          <div className="nes-card-container">
            <NesCard title={text.portfolio.cards.cardOne}
                     imgsource={clalogo}
                     link={'https://github.com/ValentinChion/cawebsite'}/>
            <NesCard title={text.portfolio.cards.cardTwo}
                     imgsource={articles}
                     link={'https://github.com/NansD/articles'}/>
            <NesCard title={text.portfolio.cards.cardThree}
                     imgsource={gamerlife}
                     link={'https://github.com/ValentinChion/gamerlife'}/>
            <NesCard title={text.portfolio.cards.cardFour}
                     imgsource={apprenticeship}
                     link={'https://github.com/ValentinChion/apprenticeship-presentation'}/>
            <NesCard title={text.portfolio.cards.cardFive}
                     imgsource={irate}
                     link={'https://github.com/EBM2018/iRate'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Translation(CSSTranslate(Portfolio));
