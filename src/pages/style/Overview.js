import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';

class Overview extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  render() {
    const codeSnippetExample = require('../../content/style/overview/images/Code Snippet.svg');

    const styleData = [
      {
        name: 'Copywriting',
        img: codeSnippetExample,
        link: '/style/copywriting'
      },
      {
        name: 'Spacing',
        img: codeSnippetExample,
        link: '/style/spacing'
      },
      {
        name: 'Colors',
        img: codeSnippetExample,
        link: '/style/colors'
      },
      {
        name: 'Font',
        img: codeSnippetExample,
        link: '/style/font'
      },
      {
        name: 'Icon',
        img: codeSnippetExample,
        link: '/style/icon'
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
