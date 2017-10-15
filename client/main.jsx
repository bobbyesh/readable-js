import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../imports/ui/App.jsx';
import reducer from '../imports/reducers';

const store = createStore(reducer);

Meteor.startup(() => {
  render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('render-target')
    );
});
