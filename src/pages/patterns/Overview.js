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
        name: 'Empty State',
        img: codeSnippetExample,
        link: '/patterns/emptystate'
      },
      {
        name: 'Navigation',
        img: codeSnippetExample,
        link: '/patterns/navigation'
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
    return <Page label="Patterns" title="Overview" content={content} />;
  }
}

export default Overview;
