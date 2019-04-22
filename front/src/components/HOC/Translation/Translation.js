import React, {Component} from 'react';
import {setLanguage, getActiveLanguage, french, english} from '../../../utils/Traductions';

function Translation(WrappedComponent) {
  return class extends Component {
    state = {
      text: {}
    };

    componentDidMount() {
      getActiveLanguage() === 'fr' ? this.setState({text: french}) : this.setState({text: english});
    }

    render() {
      return <WrappedComponent text={this.state.text}
                               setLanguage={setLanguage}
                               getActiveLanguage={getActiveLanguage}
                               {...this.props}/>
    }
  }
}

export default Translation;
