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

    const patternData = [
      {
        name: 'Empty State',
        img: codeSnippetExample,
        link: '/coming-soon/patterns/emptystate'
      },
      {
        name: 'Navigation',
        img: codeSnippetExample,
        link: '/coming-soon/patterns/navigation'
      }
    ];

    let key = 0;
    const patternTemplate = patternData.map(pattern => {
      key++;
      return (
        <li key={key} className="component-item">
          <div className="flex-item">
            <Link to={pattern.link}>
              <img src={pattern.img} />
              <p className="component-name">{pattern.name}</p>
            </Link>
          </div>
        </li>
      );
    });

    const content = (
      <div className="page">
        <ul className="flex-container">{patternTemplate}</ul>
      </div>
    );
    return <Page label="Patterns" title="Overview" content={content} />;
  }
}

export default Overview;
