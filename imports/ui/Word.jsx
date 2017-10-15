import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectWord } from '../actions';

class Word extends Component {
  constructor(props) {
    super(props)
    this.state = { isClicked: false };
  }

  componentDidMount() {
    var positionRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({
      positionRect,
      ...this.state,
    })
  }

  onWordClick(dispatch) {
    console.log('onword')
    dispatch(selectWord(this.props.word, this.state.positionRect));
  }

  render() {
    return (
      <span>{this.props.word.word}</span>
    )
  }
}

Word.propTypes = {
  word: PropTypes.shape({
    word: PropTypes.string.isRequired,
    paragraphKey: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

const mapDispatchToProps = dispatch => {
  return {onClick: onWordClick}
}

export default connect(null, mapDispatchToProps)(Word);
