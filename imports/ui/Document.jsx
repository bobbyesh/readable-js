import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Document extends Component {
  renderParagraphs() {
    var paragraphs = [];
    var bodyArray = this.props.document.body;
    var count = 0;
    while (bodyArray.length !== 0) {
      var paragraphIndex = bodyArray.findIndex(elem => elem === '\n\n');
      if (paragraphIndex !== -1) {
        paragraphIndex = bodyArray.length;
      }
      const paragraph = bodyArray.splice(0, paragraphIndex);
      paragraphs.push(paragraph);
    }

    return paragraphs.map((elem, i) => <p key={i}>{elem}</p>)
  }

  render() {
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
    body: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }),
}
