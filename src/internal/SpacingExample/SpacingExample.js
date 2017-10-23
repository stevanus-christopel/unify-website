import React, { Component } from 'react';

class SpacingExample extends Component {

  render() {
    const grid1 = require('../../content/style/spacing/images/grid-1.png');
    const grid2 = require('../../content/style/spacing/images/grid-2.png');
    const grid3 = require('../../content/style/spacing/images/grid-3.png');
    const ibmEye = require('../../assets/images/ibm-eye.png');

    return (
      <div className="spacing-example">
        <div className="spacing-example__item">
          <div className="spacing-example__text">8 px</div>
          <div className="spacing-example__box spacing-example__box--8"></div>
        </div>
        
        <div className="spacing-example__item">
          <div className="spacing-example__text">16 px</div>
          <div className="spacing-example__box spacing-example__box--16"></div>
        </div>

        <div className="spacing-example__item">
          <div className="spacing-example__text">24 px</div>
          <div className="spacing-example__box spacing-example__box--24"></div>
        </div>

        <div className="spacing-example__item">
          <div className="spacing-example__text">32 px</div>
          <div className="spacing-example__box spacing-example__box--32"></div>
        </div>

        <div className="spacing-example__item">
          <div className="spacing-example__text">40 px</div>
          <div className="spacing-example__box spacing-example__box--40"></div>
        </div>

        <div className="spacing-example__item">
          <div className="spacing-example__text">48 px</div>
          <div className="spacing-example__box spacing-example__box--48"></div>
        </div>

        <div className="spacing-example__item">
          <div className="spacing-example__text">56 px</div>
          <div className="spacing-example__box spacing-example__box--56"></div>
        </div>

        <div className="spacing-example__item">
          <div className="spacing-example__text">64 px</div>
          <div className="spacing-example__box spacing-example__box--64"></div>
        </div>
      </div>
    );
  }
}

export default SpacingExample;
