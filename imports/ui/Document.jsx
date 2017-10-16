import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

import Word from './Word';
import DefinitionBox from './DefinitionBox';

export default class Document extends Component {
    constructor(props) {
      super(props);
      this.state = {
        left: 0,
        top: 0,
        word: {
          word: '',
          paragraphId: 0,
          id: 0,
          definitions: [''],
        },
        isSelected: false,
      };

      this.updateSelectedWord = this.updateSelectedWord.bind(this);
      this.unselectWord = this.unselectWord.bind(this);
      this.renderDefinitionBox = this.renderDefinitionBox.bind(this);
      this.renderParagraphs = this.renderParagraphs.bind(this);
    }

    updateSelectedWord(positionRect, word) {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          isSelected: true,
          left: positionRect.left,
          top: positionRect.top,
          word
        }
      });
    }

    unselectWord() {
      this.setState({
        left: 0,
        top: 0,
        word: {
          word: '',
          paragraphId: 0,
          id: 0,
          definitions: [''],
        },
        isSelected: false,
      })
    }

    renderParagraphs() {
      const body = this.props.document.body;
      return body.map((elem, i) => (
          <Paragraph
            updateSelectedWord={this.updateSelectedWord}
            key={i}
            id={i}
            words={elem}
          />
        )
      );
    }

    renderDefinitionBox() {
      return (
        <DefinitionBox
          left={this.state.left}
          top={this.state.top}
          word={this.state.word}
          updateSelectedWord={this.updateSelectedWord}
          unselectWord={this.unselectWord}
        />
      )
    }

    render() {
      return (
        <article>
          <h3>{this.props.document.title}</h3>
          {this.renderParagraphs()}
          {this.state.isSelected ? this.renderDefinitionBox() : null}
        </article>
      )
    }
}

Document.propTypes = {
  document: PropTypes.shape({
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    title: PropTypes.string.isRequired,
  }),
}
