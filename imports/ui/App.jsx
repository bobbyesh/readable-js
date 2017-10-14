import React, { Component } from 'react';
import Document from './Document';

export default class App extends Component {
  getDocument() {
    const body = ['用具', '小毛巾', '\n\n', '新生儿']
    const title = 'Foo'

    return {
      'body': body,
      'title': title,
    }
  }

  renderDocument() {
    return <Document document={this.getDocument()} />
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Your Document</h1>
        </header>

        <div>
          {this.renderDocument()}
        </div>
      </div>
    );
  }
}
