import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Word from './Word';

export default class Paragraph extends Component {
  render() {
    const words = this.props.words.map((elem, i) => {
      return <Word
               word={elem}
               key={i}
               updateSelectedWord={this.props.updateSelectedWord}
               setWord={this.props.setWord}
             />
    })

    return <p>{words}</p>
  }
}

Paragraph.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  updateSelectedWord: PropTypes.func.isRequired,
}
