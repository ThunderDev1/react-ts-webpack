import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducers} from './store';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

const App: FunctionComponent<{}> = (): ReactElement => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Nav />
        <Routes />
      </React.Fragment>
    </Router>
  </Provider>
);

export default hot(App);
