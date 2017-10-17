import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

import Word from './Word';
import DefinitionBox from './DefinitionBox';

export default class Document extends Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
        word: {},
        isSelected: false,
      };

      this.updateSelectedWord = this.updateSelectedWord.bind(this);
      this.unselectWord = this.unselectWord.bind(this);
      this.renderDefinitionBox = this.renderDefinitionBox.bind(this);
      this.renderParagraphs = this.renderParagraphs.bind(this);
      this.onClick = this.onClick.bind(this);
    }

    updateSelectedWord(word) {
      this.setState((prevState, props) => {
        return {
          ...prevState,
          isSelected: true,
          word,
        }
      });
    }

    unselectWord() {
      this.setState({
        x: 0,
        y: 0,
        word: {},
        isSelected: false,
      });
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
          x={this.state.x}
          y={this.state.y}
          word={this.state.word}
          updateSelectedWord={this.updateSelectedWord}
          unselectWord={this.unselectWord}
        />
      )
    }

    onClick(event) {
      const x = event.clientX;
      const y = event.clientY;
      this.setState(prevState => {
        return {
          ...prevState,
          x,
          y,
        }
      })
    }

    render() {
      const style = {
        article: {
          fontSize: '18px',
        },
        title: {
          fontWeight: 400,
          fontSize: '2em',
          lineHeight: '1.3em',
          marginBottom: '5px',
          marginTop: 0,
          paddingTop: 15,
        },
        div: {
          paddingTop: 25,
        }
      }

      return (
        <article style={style.article} onClick={this.onClick}>
          <header style={style.title}>{this.props.document.title}</header>
          <div style={style.div}>
            {this.renderParagraphs()}
            {this.state.isSelected ? this.renderDefinitionBox() : null}
          </div>
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
