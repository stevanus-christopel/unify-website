import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import { Tabs, Tab } from 'carbon-components-react';
import CodePage from '../../internal/CodePage';
import LiveComponent from '../../internal/LiveComponent';
import OverviewPage from '../../internal/OverviewPage';
import SearchPage from '../../internal/SearchPage';

import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';

class ComponentPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

  getCurrentTab = () => {
    const tabs = ['design', 'code', 'code-rn'];
    return tabs.indexOf(this.props.params.page);
  };

  updateTab = evt => {
    const tab = evt.currentTarget.querySelector('a').getAttribute('href');
    browserHistory.push(tab);
  };

  render() {
    const { params } = this.props;

    const currentComponent = params.name;
    if (currentComponent === 'overview') {
      return <OverviewPage />;
    }

    if(params.searchQuery) {
      return <SearchPage searchQuery={params.searchQuery} />;
    }

    if (params.page === 'live') {
      return <LiveComponent component={currentComponent} />;
    }

    const componentTitle =
      currentComponent.replace(/-/g, ' ').charAt(0).toUpperCase() +
      currentComponent.replace(/-/g, ' ').substring(1);
    const design = require(`../../content/components/${currentComponent}/design.md`);

    let hasCodePage;
    try {
      const jsFile = require(`../../data/components/${currentComponent}.js`); // eslint-disable-line
      hasCodePage = true;
    } catch (err) {
      hasCodePage = false;
    }

    const content = (
      <Tabs
        key={params.name}
        className="bx--global-light-ui page-tabs"
        selected={this.getCurrentTab()}
      >
        <Tab
          href={`/components/${currentComponent}/design`}
          label="Design"
          onClick={this.updateTab}
        >
          <MarkdownPage content={design} />
        </Tab>
        <Tab
          href={`/components/${currentComponent}/code`}
          label="React"
          onClick={this.updateTab}
        >
          {
            hasCodePage
            ? <CodePage component={currentComponent} type="code" />
            : ''
          }
        </Tab>
        <Tab
          href={`/components/${currentComponent}/code-rn`}
          label="React Native"
          onClick={this.updateTab}
        >
          {
            hasCodePage
            ? <CodePage component={currentComponent} type="code-rn" />
            : ''
          }
        </Tab>
      </Tabs>
    );
    return <Page label="components" title={componentTitle} content={content} />;
  }
}

export default ComponentPage;
