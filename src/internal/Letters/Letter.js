import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LetterPNG from './LetterPNG';
import LetterSVG from './LetterSVG';

class Letter extends Component {
  static propTypes = {
    letter: PropTypes.string,
    active: PropTypes.bool,
    version: PropTypes.number,
    className: PropTypes.string,
    onClick: PropTypes.func
  }

  state = {
    active: this.props.active || false,
    hover: false,
  }

  getLetterPNG = (letter) => <LetterPNG letter={letter} version={this.props.version} />;

  handleMouseEnter = () => {
    if (window.innerWidth > 700) {
      this.setState({
        hover: true,
      });
    }
  }

  endAnimation = (evt) => {
    evt.currentTarget.removeEventListener('animationiteration', this.endAnimation);
    this.setState({
      hover: false,
    });
  }

  handleMouseLeave = (evt) => {
    evt.currentTarget.addEventListener('animationiteration', this.endAnimation);
  }

  render() {
    const classNames = classnames(this.props.className, {
      overview__letter: true,
      'overview__letter--active': this.state.active,
      'overview__letter--hover': this.state.hover,
      'white': this.props.headerPage != 3,
    });

    let html = this.props.letter;
    return (
      <div
        className={classNames}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span className="letter" onClick={this.props.onClick}>
          {html}
        </span>
        {/*this.getLetterPNG(this.props.letter)*/}
      </div>
    );
  }
}

export default Letter;
