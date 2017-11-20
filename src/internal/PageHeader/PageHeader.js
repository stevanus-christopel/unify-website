import React, { Component } from 'react';
import PropTypes from 'prop-types';

import background_header from './images/page-header.png';

const backgroundStyle = {
  backgroundImage: "url(" + background_header + ")"
}

class PageHeader extends Component {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const {
      label,
      title,
    } = this.props;

    let labelContent = (label) ? <h4 className="page-header__label">{label}</h4> : <div className="page-header__label"></div>;

    return (
      <div className="page-header" style={ backgroundStyle }>
        {labelContent}
        <h1 id="page-title" className="page-header__title">{title}</h1>
      </div>
    );
  }
}

export default PageHeader;
