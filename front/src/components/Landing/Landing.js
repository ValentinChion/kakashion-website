import React, {Component} from 'react';
import LandingDisplayer from './LandingDisplayer';
import Translation from '../HOC/Translation/Translation';

class Landing extends Component {
  state = {
    activeLanguage: '',
  };

  componentDidMount() {
    this.setState({activeLanguage: this.props.getActiveLanguage()});
  }

  toggleLanguage = (language) => () => {
    this.props.setLanguage(language);
  };

  render() {
    return (
      <LandingDisplayer toggleLanguage={this.toggleLanguage}
                        activeLanguage={this.state.activeLanguage}/>
    );
  }
}

export default Translation(Landing);
