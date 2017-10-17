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
    const x = event.clientX;
    const y = event.clientY;
    this.props.updateSelectedWord(x - this.state.offsetX + 50, y - 30, this.props.word);
  }

  componentDidMount() {
    const clientRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState(prevState => {
      return {...prevState, offsetX: clientRect.left, offsetY: clientRect.top}
    });
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
