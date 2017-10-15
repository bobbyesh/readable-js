import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Word extends Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: false };
  }

  componentDidMount() {
    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      ...this.state,
    })
  }

  render() {
    return (
      <span>{this.props.word}</span>
    )
  }
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
}
