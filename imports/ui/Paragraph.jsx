import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

export default class Paragraph extends Component {
  render() {
    const words = this.props.words.map((elem, i) => <Word word={elem} key={i} />);
    return <p>{words}</p>
  }
}

Paragraph.propTypes = {
  words: PropTypes.arrayOf(Word.propTypes.word).isRequired,
}
