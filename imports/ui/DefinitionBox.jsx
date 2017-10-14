import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DefinitionBox extends Component {
  render() {
    const style = {
      'color': 'blue',
      'position': 'absolute',
      'left': this.props.left,
      'top': this.props.top,
    }

    return(
      <div style={style}>
        <h2>{this.props.headword}</h2>
        <ul>
          {this.props.definitions.map((elem, i) => <li key={i}>{elem}</li>)}
          <li>Add your own</li>
        </ul>
      </div>
    )
  }
}

DefinitionBox.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
  definitions: PropTypes.arrayOf(PropTypes.string).isRequired,
}
