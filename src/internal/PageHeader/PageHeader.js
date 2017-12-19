import React, { Component } from 'react';
import PropTypes from 'prop-types';

import background_header from './images/page-header.png';
import background_header_grayscale from './images/page-header-grayscale.png';

class PageHeader extends Component {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    grayscale: PropTypes.bool
  }

  render() {
    const {
      label,
      title,
    } = this.props;

    let labelContent = (label) ? <h4 className="page-header__label">{label}</h4> : <div className="page-header__label"></div>;

    return (
      <div className="page-header" style={{
        backgroundImage: "url(" + ( this.props.grayscale ? background_header_grayscale : background_header ) + ")"
      }}>
        {labelContent}
        <h1 id="page-title" className="page-header__title">{title}</h1>
      </div>
    );
  }
}

export default PageHeader;
