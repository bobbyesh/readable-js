import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

export default class Paragraph extends Component {
  render() {
    const words = this.props.words.map((elem, i) => {
      const obj = {word: elem, paragraphKey: this.props.id, id: i};

      return <Word word={obj} key={i} />
    })

    return <p>{words}</p>
  }
}

Paragraph.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
}
