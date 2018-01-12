import React from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';
import Copywriting from './Copywriting';
import Spacing from './Spacing';
import Colors from './Colors';
import Typography from './Typography';
import Iconography from './Iconography';
import Layer from './Layer';
import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';

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
    } else if (paramsName === 'spacing') {
      content = <Spacing currentPage={paramsPage} />;
    } else if (paramsName === 'colors') {
      content = <Colors currentPage={paramsPage} />;
    } else if (paramsName === 'typography') {
      content = <Typography currentPage={paramsPage} />;
    } else if (paramsName === 'layer') {
      content = <Layer currentPage={paramsPage} />;
    } else if (paramsName === 'iconography') {
      content = <Iconography currentPage={paramsPage} />;
    } else {
      content = (
        <MarkdownPage content={require(`../../content/styles/${paramsName}/${paramsName}.md`)} />
      );
    }
    return <Page label="Styles" title={title} content={content} />;
  }
}

export default Style;
