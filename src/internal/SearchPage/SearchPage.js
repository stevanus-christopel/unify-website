import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'; // eslint-disable-line
import Page from '../Page';

class SearchPage extends Component {
  render() {
    const componentData = [
      {
        name: 'Bottom Navigation',
        img: require('../OverviewPage/images/Bottom Nav.svg'),
        link: '/components/bottom-navigation`'
      },
      {
        name: 'Bottom Sheets',
        img: require('../OverviewPage/images/Bottom Sheet.svg'),
        link: '/components/bottom-sheets'
      },
      {
        name: 'Button',
        img: require('../OverviewPage/images/Button.svg'),
        link: '/components/button'
      },
      {
        name: 'Dialogs',
        img: require('../OverviewPage/images/Dialog.svg'),
        link: '/components/dialogs'
      },
      {
        name: 'Menus',
        img: require('../OverviewPage/images/Menu.svg'),
        link: '/components/menus'
      },
      {
        name: 'Navigation Bar',
        img: require('../OverviewPage/images/Navigation Bar.svg'),
        link: '/components/navigation-bar'
      },
      {
        name: 'Tabs',
        img: require('../OverviewPage/images/Tabs.svg'),
        link: '/components/tabs'
      },
      {
        name: 'Tickers',
        img: require('../OverviewPage/images/Ticker.svg'),
        link: '/components/tickers'
      },
      {
        name: 'Toaster',
        img: require('../OverviewPage/images/Toaster.svg'),
        link: '/components/toaster'
      },
      {
        name: 'Tooltips',
        img: require('../OverviewPage/images/Tooltip.svg'),
        link: '/components/tooltips'
      }
    ];

    const codeSnippetExample = require('../../content/styles/overview/images/Code Snippet.svg');
    const copywritingImage = require('../../content/styles/overview/images/Copywriting.svg');

    const styleData = [
      {
        name: 'Copywriting',
        img: copywritingImage,
        link: '/styles/copywriting'
      },
      {
        name: 'Size & Spacing',
        img: codeSnippetExample,
        link: '/styles/spacing'
      },
      {
        name: 'Colors',
        img: codeSnippetExample,
        link: '/styles/colors'
      },
      {
        name: 'Font',
        img: codeSnippetExample,
        link: '/coming-soon/styles/font'
      },
      {
        name: 'Icon',
        img: codeSnippetExample,
        link: '/coming-soon/styles/icon'
      }
    ];

    const interactionData = [
        {
            name: 'Sound',
            img: codeSnippetExample,
            link: '/coming-soon/interactions/sound'
        },
        {
            name: 'Component Feedback',
            img: codeSnippetExample,
            link: '/coming-soon/interactions/component-feedback'
        },
        {
            name: 'Transition',
            img: codeSnippetExample,
            link: '/coming-soon/interactions/transition'
        }
    ];

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
    let componentCount = 0;
    const componentTemplate = componentData.map(componentItem => {
        if(componentItem.name.toLowerCase().indexOf(this.props.searchQuery.toLowerCase()) < 0) {
            return;
        } else {
            key++;
            componentCount++;
            return (
                <li key={key} className="component-item">
                <div className="flex-item">
                    <Link to={componentItem.link}>
                    <img src={componentItem.img} />
                    <p className="component-name">{componentItem.name}</p>
                    </Link>
                </div>
                </li>
            );
        }
    });

    let styleCount = 0;
    const styleTemplate = styleData.map(styleItem => {
        if(styleItem.name.toLowerCase().indexOf(this.props.searchQuery.toLowerCase()) < 0) {
            return;
        } else {
            key++;
            styleCount++;
            return (
            <li key={key} className="component-item">
                <div className="flex-item">
                <Link to={styleItem.link}>
                    <img src={styleItem.img} />
                    <p className="component-name">{styleItem.name}</p>
                </Link>
                </div>
            </li>
            );
        }
    });

    let interactionCount = 0;
    const interactionTemplate = interactionData.map(interactionItem => {
        if(interactionItem.name.toLowerCase().indexOf(this.props.searchQuery.toLowerCase()) < 0) {
            return;
        } else {
            key++;
            interactionCount++;
            return (
            <li key={key} className="component-item">
                <div className="flex-item">
                <Link to={interactionItem.link}>
                    <img src={interactionItem.img} />
                    <p className="component-name">{interactionItem.name}</p>
                </Link>
                </div>
            </li>
            );
        }
    });

    let patternCount = 0;
    const patternTemplate = patternData.map(patternItem => {
        if(patternItem.name.toLowerCase().indexOf(this.props.searchQuery.toLowerCase()) < 0) {
            return;
        } else {
            key++;
            patternCount++;
            return (
            <li key={key} className="component-item">
                <div className="flex-item">
                <Link to={patternItem.link}>
                    <img src={patternItem.img} />
                    <p className="component-name">{patternItem.name}</p>
                </Link>
                </div>
            </li>
            );
        }
    });

    const content = (
      <div className="page">
        {
            (componentCount > 0) &&
            <h2 className="header-unify-page">Components</h2>
        }
        <ul className="flex-container">{componentTemplate}</ul>

        {
            (styleCount > 0) &&
            <h2 className="header-unify-page">Styles</h2>
        }
        <ul className="flex-container">{styleTemplate}</ul>

        {
            (interactionCount > 0) &&
            <h2 className="header-unify-page">Interactions</h2>
        }
        <ul className="flex-container">{interactionTemplate}</ul>

        {
            (patternCount > 0) &&
            <h2 className="header-unify-page">Patterns</h2>
        }
        <ul className="flex-container">{patternTemplate}</ul>
      </div>
    );
    return <Page className="search-page" label={ (componentCount + styleCount + interactionCount + patternCount) + 
        " result found.."} 
        title={"search for \"" + this.props.searchQuery + "\""} content={content} />;
  }
}

export default SearchPage;
