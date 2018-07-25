import ReduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

// Install redux devtools https://github.com/zalmoxisus/redux-devtools-extension
// This line will works fine even if you don't do it
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      ReduxPromise,
      thunkMiddleware, // lets us dispatch() functions
    ),
  ),
);
