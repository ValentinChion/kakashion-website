import React, { Component } from 'react'
import CSSTranslate from '../CSSHandle/CSSTranslate';

export class Resume extends Component {
  render() {
    return (
      <div className="gap-header" name="Resume">
      <div className="nes-container with-title container">
        <h3 className="title">My resume</h3>
        <div className="nes-table-responsive">
          <table className="nes-table is-dark">
            <thead>
              <tr>
                <th>Experience</th>
                <th>Education</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Talend Developper - Sopra Steria - France - September 2018 | ...</td>
                <td>ITEEM - French Engineering & Business School - 2014 | 2019</td>
              </tr>
              <tr>
                <td>VBA Developper - Tupperware - Belgium - May | December 2017</td>
                <td>Major in web development - 2018 | 2019</td>
              </tr>
              <tr>
                <td>VBA Developper - Safran Aircraft Engines - Vernon - June | August 2016</td>
                <td>TOEIC - 965 | 990 - 2017</td>
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

export default CSSTranslate(Resume);

