import React from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';
import Copywriting from './Copywriting';
import Colors from './Colors';
import Iconography from './Iconography';
import Layer from './Layer';
import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';
import Spacing from './Spacing';

class Style extends React.Component {
  static propTypes = {
    params: PropTypes.object
  }

  render() {
    const {
      params
    } = this.props;
    const paramsName = params.name;
    const paramsPage = params.page;
    const title = paramsName.charAt(0).toUpperCase() + paramsName.substring(1);
    let content;
    if (paramsName === 'overview') {
      return <Overview currentPage={paramsPage} />;
    } else if (paramsName === 'copywriting') {
      content = <Copywriting currentPage={paramsPage} />;
    } else if (paramsName === 'colors') {
      content = <Colors currentPage={paramsPage} />;
    } else if (paramsName === 'layer') {
      content = <Layer currentPage={paramsPage} />;
    } else if (paramsName === 'iconography') {
      content = <Iconography currentPage={paramsPage} />;
    } else if (paramsName === 'spacing') {
      content = <Spacing currentPage={paramsPage} />;
    } else {
      content = (
        <MarkdownPage content={require(`../../content/style/${paramsName}/${paramsName}.md`)} />
      );
    }
    return <Page label="Style" title={title} content={content} />;
  }
}

export default Style;
