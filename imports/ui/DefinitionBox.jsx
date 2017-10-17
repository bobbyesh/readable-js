import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddDefinition from './AddDefinition';
import ReactDOM from 'react-dom';

export default class DefinitionBox extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addDefinition = this.addDefinition.bind(this);
    this.state = { newDefinitions: [], offsetX: 0, offsetY: 0 };
  }

  onClick(ev) {
    ev.preventDefault();
    this.props.unselectWord();
  }

  addDefinition(definition) {
    this.setState(prevState => {
      prevState.newDefinitions.push(definition);
      return prevState;
    })
  }

  render() {
    console.log('state', this.props);
    const style = {
      display: 'block',
      backgroundColor: 'blue',
      position: 'fixed',
      left: this.props.x + 10,
      top:  this.props.y + 20,
    }

    return(
      <div style={style}>
        <h2>{this.props.word.word}</h2>
        <ul>
          {
            this.props.word.definitions.concat(this.state.newDefinitions)
                                       .map((elem, i) => <li key={i}>{elem}</li>)
          }
          <AddDefinition addDefinition={this.addDefinition} />
        </ul>
        <a onClick={this.onClick}>Close</a>
      </div>
    )
  }
}

DefinitionBox.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  word: PropTypes.object.isRequired,
}
