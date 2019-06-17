import React, { Component } from 'react'
import CSSTranslate from '../../HOC/CSSHandle/CSSTranslate';
import Translation from '../../HOC/Translation/Translation';

class Resume extends Component {
  render() {
    const {text} = this.props;
    return (
      <div className="gap-header" name="Resume">
      <div className="nes-container with-title container">
        <h3 className="title">{text.resume.title}</h3>
        <div className="nes-table-responsive">
          <table className="nes-table is-dark">
            <thead>
              <tr>
                <th>{text.resume.experience.title}</th>
                <th>{text.resume.education.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{text.resume.experience.cellOne}</td>
                <td>{text.resume.education.cellOne}</td>
              </tr>
              <tr>
                <td>{text.resume.experience.cellTwo}</td>
                <td>{text.resume.education.cellTwo}</td>
              </tr>
              <tr>
                <td>{text.resume.experience.cellThree}</td>
                <td>{text.resume.education.cellThree}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div className="mario-content">
          <div className="mario-wrapper">
            <div className="state1"/>
            <div className="state2"/>
            <div className="state3"/>
          </div>
          <div className="floor"/>
        </div>
      </div>
    )
  }
}

export default Translation(CSSTranslate(Resume));

