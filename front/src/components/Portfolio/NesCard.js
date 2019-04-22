import React, {Component} from 'react';
import CSSTranslate from '../CSSHandle/CSSTranslate';

class NesCard extends Component {
  state = {
    githubClass: 'nes-icon github is-large is-nes-card-icon nes-is-hidden'
  };


  toggleGithubIcon = () => {
    const regex = /.*(nes-is-hidden).*/;
    this.state.githubClass.match(regex) ? this.setState({githubClass: 'nes-icon github is-large is-nes-card-icon'}) : this.setState({githubClass: 'nes-icon github is-large is-nes-card-icon nes-is-hidden'});
  };

  render() {
    const {title, imgsource, link, isLast} = this.props;
    const {githubClass} = this.state;
    return (
      <>
        <div
          className={isLast ? 'nes-container with-title is-rounded nes-last-card' : 'nes-container with-title is-rounded nes-card-item'}>
          <p className="title">{title}</p>
          <div className="nes-card-image-container">
            <a href={link ? link : '#'} target="_blank" rel='noopener'>
              <img className={isLast ? 'nes-last-card-image' : 'nes-card-image'}
                   src={imgsource}
                   onMouseOver={this.toggleGithubIcon}
                   onMouseLeave={this.toggleGithubIcon}/>
              <i className={githubClass}/>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default CSSTranslate(NesCard);
