import React, { Component } from 'react';
import Document from './Document';
import Navbar from './Navbar';

export default class App extends Component {
  getDocument() {
    const body = [
      ['用具', '小毛巾'],
      ['新生儿'],
    ].map((paragraph, paragraphId) => {
        return paragraph.map((word, wordId) => {
          return {
            word: word,
            id: wordId,
            paragraphId: paragraphId,
            definitions: ['This is definition 1', 'This is definition 2']
          }
        })
    });
    const title = 'Foo';

    return {
      body,
      title,
    }
  }

  renderDocument() {
    return <Document document={this.getDocument()} />
  }

  render() {
    return (
        <div className="container">
          <Navbar />
          <div className='row'>
            <div className="col-md-3">
            </div>
            <div className="col-md-5">
              {this.renderDocument()}
            </div>
            <div className="col-md-3">
            </div>
          </div>
        </div>
    );
  }
}
