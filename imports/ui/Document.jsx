import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';
import { connect } from 'react-redux'

import Word from './Word';

class Document extends Component {
  renderParagraphs() {
    const body = this.props.document.body;
    return body.map((elem, i) => <Paragraph key={i} id={i} words={elem}/>);
  }

  render() {
    console.log('selectedWord', this.props);
    return (
      <div>
        <h3>{this.props.document.title}</h3>
        <div>
          {this.renderParagraphs()}
        </div>
      </div>
    )
  }
}

Document.propTypes = {
  document: PropTypes.shape({
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    title: PropTypes.string.isRequired,
  }),
}

const mapStateToProps = (state, ownProps) => ({
  selectedWord: state.word,
  positionRect: state.positionRect,
})

export default connect(mapStateToProps, null)(Document);
