import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';
import CodeExample from '../CodeExample/CodeExample';

// import 'unify-react-mobile/build/styles.css';

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    htmlFile: PropTypes.any,
    component: PropTypes.string,
    variation: PropTypes.string,
  };

  render() {
    const { htmlFile, component, variation } = this.props;

    const classNames = classnames({
      'component-example__live--rendered': true
    });

    const lightUIclassnames = classnames({
      'component-example': true,
      'bx--global-light-ui': component === 'tabs',
    });

    const componentLink = component === 'detail-page-header'
      ? `/components/${variation}/live`
      : `/components/${component}/live`;

    let codeFile;

    try{
      if(variation != null) {
        codeFile = require(`../../content/components/${component}/code/${variation}.js`).default;
      } else {
        codeFile = require(`../../content/components/${component}/code/${component}.js`).default;
      }
    } catch (error) {
      console.log(error);
    }

    return (
      <div className={lightUIclassnames}>
        <div className="svg--sprite" aria-hidden="true" />
        <div className="component-example__live">
          <div className={classNames}>
            {
              codeFile
            }
          </div>
          {/*<Link
            className="component-example__view-full-render"
            to={componentLink}
          >
            View full render
          </Link>*/}
        </div>
        <CodeExample htmlFile={htmlFile} />
      </div>
    );
  }
}

export default ComponentExample;
