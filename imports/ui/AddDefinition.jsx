import React, { Component } from 'react';

export default class AddDefinition extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.setState((prevState) => { return { ...prevState, clicked: !prevState.clicked } });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState((prevState) => { return {...prevState, definition: value} })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addDefinition(this.state.definition);
  }

  render() {
    if (this.state.clicked) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Definition: <input type='text' name='definition' onChange={this.handleChange} /> </label>
            <input type='submit' value='Submit' />
        </form>
      )
    } else {
      return (
        <button onClick={this.onClick}>Add a definition</button>
      )
    }
  }
}
