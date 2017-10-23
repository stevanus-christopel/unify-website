import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import color from 'color';
import classnames from 'classnames';
import ReactGA from 'react-ga';

class ColorCard extends Component {
  static propTypes = {
    hex: PropTypes.string,
    white: PropTypes.bool,
    name: PropTypes.string,
    width: PropTypes.number,
    gradient: PropTypes.string
  }

  state = {
    value: this.props.hex,
    displayCopied: false,
  };

  toggleCopied = () => {
    this.setState({
      displayCopied: true,
    });
    setTimeout(() => {
      this.setState({
        displayCopied: false,
      });
    }, 2500);
  }

  handleClick = () => {
    ReactGA.event({
      category: 'Copy Color',
      action: 'click'
    });
  }

  colorContrast = (ColorHEX) => {
    if (ColorHEX.charAt(0) === '#') {
      const ConvertedHEX = color(ColorHEX);
      return (ConvertedHEX.luminosity() > 0.44) ? 'dark-text' : 'light-text';
    }
    return 'dark-text';
  }

  render() {
    const textClass = this.colorContrast(this.props.hex);
    const {
      hex,
      white,
      name,
    } = this.props;

    const classNames = classnames({
      'color': true,
      'color--border': white,
    });

    return (
      <div tabIndex="0" className={classNames}>
        <div tabIndex="0"
        className={
          classnames(
            "color__example",
            name==="" && "color__example--empty",
            this.props.width === 3 && "color__example--triple-width",
            this.props.width === 2 && "color__example--double-width",
            this.props.width === 0.5 && "color__example--half-width",
            this.props.gradient === "green" && "color__example--gradient-green",
            this.props.gradient === "yellow" && "color__example--gradient-yellow",
            this.props.gradient === "blue" && "color__example--gradient-blue"
          )
        }
        style={{ backgroundColor: hex }} >
        {
          hex != "" &&
          <div>   
            <CopyToClipboard
              text={this.state.value}
              onCopy={this.toggleCopied}
            >

            {
              hex != "" &&
              <button tabIndex="0" className={textClass} onClick={() => this.handleClick()}>{this.state.displayCopied ? 'Copied!' : 'Copy HEX'}</button>
            }
              
            </CopyToClipboard>
          </div>
        }
        </div>
        {name != "" && <p>{name}</p>}
        {hex != "" && <p>{hex}</p>}
      </div>
    );
  }
}

export default ColorCard;
