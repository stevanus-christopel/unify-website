import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'; // eslint-disable-line
import Page from '../Page';

class OverviewPage extends Component {
  render() {
    const componentData = [
      {
        name: 'Bottom Navigation',
        img: require('./images/Bottom Nav.svg'),
        link: '/components/bottom-navigation'
      },
      {
        name: 'Bottom Sheets',
        img: require('./images/Bottom Sheet.svg'),
        link: '/components/bottom-sheets'
      },
      {
        name: 'Button',
        img: require('./images/Button.svg'),
        link: '/components/button'
      },
      {
        name: 'Cards',
        img: require('./images/Cards.svg'),
        link: '/components/cards'
      },
      {
        name: 'Carousel',
        img: require('./images/Cards.svg'),
        link: '/components/carousel'
      },
      {
        name: 'Chips',
        img: require('./images/Chips.svg'),
        link: '/components/chips'
      },
      {
        name: 'Dialogs',
        img: require('./images/Dialog.svg'),
        link: '/components/dialogs'
      },
      {
        name: 'Footer',
        img: require('./images/Dialog.svg'),
        link: '/components/footer'
      },
      {
        name: 'Lists',
        img: require('./images/Lists.svg'),
        link: '/components/lists'
      },
      {
        name: 'Menus',
        img: require('./images/Menu.svg'),
        link: '/components/menus'
      },
      {
        name: 'Navigation Bar',
        img: require('./images/Navigation Bar.svg'),
        link: '/components/navigation-bar'
      },
      {
        name: 'Pickers',
        img: require('./images/Pickers.svg'),
        link: '/components/pickers'
      },
      {
        name: 'Selection Controls',
        img: require('./images/Selection Controls.svg'),
        link: '/components/selection-controls'
      },
      {
        name: 'Sliders',
        img: require('./images/Sliders.svg'),
        link: '/components/sliders'
      },
      {
        name: 'Stepper',
        img: require('./images/Stepper.svg'),
        link: '/components/stepper'
      },
      {
        name: 'Tabs',
        img: require('./images/Tabs.svg'),
        link: '/components/tabs'
      },
      {
        name: 'Text Area',
        img: require('./images/Text Fields.svg'),
        link: '/components/text-area'
      },
      {
        name: 'Text Fields',
        img: require('./images/Text Fields.svg'),
        link: '/components/text-fields'
      },
      {
        name: 'Tickers',
        img: require('./images/Ticker.svg'),
        link: '/components/tickers'
      },
      {
        name: 'Toaster',
        img: require('./images/Toaster.svg'),
        link: '/components/toaster'
      },
      {
        name: 'Tooltips',
        img: require('./images/Tooltip.svg'),
        link: '/components/tooltips'
      }
    ];
    let key = 0;
    const componentTemplate = componentData.map(component => {
      key++;
      return (
        <li key={key} className="component-item">
          <div className="flex-item">
            <Link to={component.link}>
              <img src={component.img} />
              <p className="component-name">{component.name}</p>
            </Link>
          </div>
        </li>
      );
    });

    const content = (
      <div className="page page--overview">
        <ul className="flex-container">{componentTemplate}</ul>
      </div>
    );
    return <Page label="Components" title="Overview" content={content} />;
  }
}

export default OverviewPage;
