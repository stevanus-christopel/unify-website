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

    const interactionData = [
      {
        name: 'Sound',
        img: codeSnippetExample,
        link: '/interactions/sound'
      },
      {
        name: 'Component Feedback',
        img: codeSnippetExample,
        link: '/interactions/component-feedback'
      },
      {
        name: 'Transition',
        img: codeSnippetExample,
        link: '/interactions/transition'
      }
    ];

    let key = 0;
    const interactionTemplate = interactionData.map(interaction => {
      key++;
      return (
        <li key={key} className="component-item">
          <div className="flex-item">
            <Link to={interaction.link}>
              <img src={interaction.img} />
              <p className="component-name">{interaction.name}</p>
            </Link>
          </div>
        </li>
      );
    });

    const content = (
      <div className="page">
        <ul className="flex-container">{interactionTemplate}</ul>
      </div>
    );
    return <Page label="Interactions" title="Overview" content={content} />;
  }
}

export default Overview;
