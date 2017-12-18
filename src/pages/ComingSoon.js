import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import MarkdownPage from '../internal/MarkdownPage';
import PageTabs from '../internal/PageTabs';
import Page from '../internal/Page';

class Grid extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['design', 'code'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = "Coming Soon";
    }

    let content = (
        <PageTabs tabs={tabs} currentPage={currentPage}>
            <Tab href={('/coming-soon/' + this.props.params.group + '/' + this.props.params.element)} label="Design">
                <MarkdownPage content={require('../content/coming-soon.md')} />
            </Tab>
            <Tab href={('/coming-soon/' + this.props.params.group + '/' + this.props.params.element)} label="Code">
                <MarkdownPage content={require('../content/coming-soon.md')} />
            </Tab>
        </PageTabs>
    );

    return <Page className="coming-soon" label={this.props.params.group} title={this.props.params.element} content={content} />;
  }
}

export default Grid;
