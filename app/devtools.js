import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import env from './env';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import DevTools from './containers/DevTools'

// our main redux store
const store = remote.app.reduxStore;

render (
  <Provider store={store}>
    <DevTools />
  </Provider>,
  document.getElementById("root")
)