import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';

class Overview extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  render() {
    const styleData = [
      {
        name: 'Copywriting',
        img: require('../../content/styles/overview/images/Copywriting.svg'),
        link: '/styles/copywriting'
      },
      {
        name: 'Size & Spacing',
        img: require('../../content/styles/overview/images/Spacing.svg'),
        link: '/styles/spacing'
      },
      {
        name: 'Colors',
        img: require('../../content/styles/overview/images/Color.svg'),
        link: '/styles/colors'
      },
      {
        name: 'Font',
        img: require('../../content/styles/overview/images/Font.svg'),
        link: '/coming-soon/styles/font'
      },
      {
        name: 'Icon',
        img: require('../../content/styles/overview/images/Icon.svg'),
        link: '/coming-soon/styles/icon'
      }
    ];

    let key = 0;
    const styleTemplate = styleData.map(style => {
      key++;
      return (
        <li key={key} className="component-item">
          <div className="flex-item">
            <Link to={style.link}>
              <img src={style.img} />
              <p className="component-name">{style.name}</p>
            </Link>
          </div>
        </li>
      );
    });

    const content = (
      <div className="page">
        <ul className="flex-container">{styleTemplate}</ul>
      </div>
    );
    return <Page label="Style" title="Overview" content={content} />;
  }
}

export default Overview;
