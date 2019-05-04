import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Counter from './components/Counter';

const Routes: FunctionComponent<{}> = (): ReactElement => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/counter" component={Counter} />
  </Switch>
);

export default Routes;
