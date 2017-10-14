import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

import Word from './Word';

export default class Document extends Component {
  renderParagraphs() {
    const body = this.props.document.body;
    return body.map((elem, i) => <Paragraph key={i} words={elem}/>);
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
    body: PropTypes.arrayOf(Paragraph.propTypes.words).isRequired,
    title: PropTypes.string.isRequired,
  }),
}
