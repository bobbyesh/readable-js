import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Word extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this);
    this.state = {offsetX: 0, offsetY: 0}
  }

  onClick(event) {
    this.props.updateSelectedWord(this.props.word);
  }

  render() {
    return (
      <span onClick={this.onClick}>{this.props.word.word}</span>
    )
  }
}

Word.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string.isRequired,
    paragraphId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    definitions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  updateSelectedWord: PropTypes.func.isRequired,
}
