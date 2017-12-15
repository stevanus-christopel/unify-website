import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import MarkdownPage from '../../internal/MarkdownPage';
import PageTabs from '../../internal/PageTabs';

class Grid extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['design', 'code'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/grid/design" label="Design">
          <MarkdownPage content={require('../../content/style/copywriting/design.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Grid;
