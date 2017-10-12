import React, { Component } from 'react';
import PropTypes from 'prop-types';

import u_letter from './images/u@2x.png';
import n_letter from './images/n@2x.png';
import i_letter from './images/i@2x.png';
import f_letter from './images/f@2x.png';
import y_letter from './images/y@2x.png';
import d_letter from './images/d@2x.png';
import e_letter from './images/e@2x.png';
import s_letter from './images/s@2x.png';
import i_v2_letter from './images/i_v2@2x.png';
import g_letter from './images/g@2x.png';
import n_v2_letter from './images/n_v2@2x.png';
import s_v2_letter from './images/s_v2@2x.png';
import s_v3_letter from './images/s_v3@2x.png';
import t_letter from './images/t@2x.png';
import m_letter from './images/m@2x.png';

class LetterPNG extends Component {
  static propTypes = {
    letter: PropTypes.string,
    version: PropTypes.number,
  }

  state = {
    D: (
        <img alt='' src={d_letter} />
    ),
    E: (
        <img alt='' src={e_letter} />
    ),
    F: (
        <img alt='' src={f_letter} />
    ),
    G: (
        <img alt='' src={g_letter} />
    ),
    I: (
        <img alt='' src={ this.props.version === 2 ? i_v2_letter:i_letter} />
    ),
    M: (
        <img alt='' src={m_letter} />
    ),
    N: (
        <img alt='' src={ this.props.version === 2 ? n_v2_letter:n_letter} />
    ),
    S: (
        <img alt='' src={ this.props.version === 3 ? s_v3_letter:
        this.props.version === 2 ? s_v2_letter : s_letter} />
    ),
    T: (
        <img alt='' src={t_letter} />
    ),
    U: (
        <img alt='' src={u_letter} />
    ),
    Y: (
        <img alt='' src={y_letter} />
    )
  }

  render() {
    return (
      <div>{this.state[this.props.letter]}</div>
    );
  }
}

export default LetterPNG;
