import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddDefinition from './AddDefinition';

export default class DefinitionBox extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addDefinition = this.addDefinition.bind(this);
    this.state = { newDefinitions: [] }
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
    const style = {
      backgroundColor: 'blue',
      position: 'absolute',
      left: this.props.left + 25,
      top: this.props.top + 25,
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
        <a onClick={this.onClick} href='.'>Close</a>
      </div>
    )
  }
}

DefinitionBox.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  word: PropTypes.object.isRequired,
}
