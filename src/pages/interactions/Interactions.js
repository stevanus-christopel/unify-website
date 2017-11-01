import React from 'react';
import PropTypes from 'prop-types';
import Overview from './Overview';

class Interactions extends React.Component {
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
    }
    return <Page label="Interactions" title={title} content={content} />;
  }
}

export default Interactions;
