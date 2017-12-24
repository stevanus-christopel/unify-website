import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';

class Overview extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  render() {

    const interactionData = [
      {
        name: 'Sound',
        img: require('../../content/interaction/overview/images/Sound.svg'),
        link: '/coming-soon/interactions/sound'
      },
      {
        name: 'Component Feedback',
        img: require('../../content/interaction/overview/images/Feedback.svg'),
        link: '/coming-soon/interactions/component-feedback'
      },
      {
        name: 'Transition',
        img: require('../../content/interaction/overview/images/Transition.svg'),
        link: '/coming-soon/interactions/transition'
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
      <div className="page page--overview">
        <ul className="flex-container">{interactionTemplate}</ul>
      </div>
    );
    return <Page label="Interactions" title="Overview" content={content} />;
  }
}

export default Overview;
