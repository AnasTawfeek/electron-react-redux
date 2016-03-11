import { createStore, applyMiddleware, compose } from 'redux'
import { persistentStore } from 'redux-pouchdb-plus';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers/main'
import DevTools from '../containers/DevTools';

import PouchDB from 'pouchdb';

const db = new PouchDB('_pouchdb');

//optional
const applyMiddlewares = applyMiddleware(
  thunkMiddleware
);

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  persistentStore({db}),
  DevTools.instrument()
)(createStore);

const store = createStoreWithMiddleware(reducer);

export store;