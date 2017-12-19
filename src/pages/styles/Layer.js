import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import MarkdownPage from '../../internal/MarkdownPage';
import PageTabs from '../../internal/PageTabs';

class Layer extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['overview', 'usage'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/styles/layer/overview" label="Overview">
          <MarkdownPage content={require('../../content/styles/layer/overview.md')} />
        </Tab>
        <Tab href="/styles/layer/usage" label="Usage">
          <MarkdownPage content={require('../../content/styles/layer/usage.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Layer;
