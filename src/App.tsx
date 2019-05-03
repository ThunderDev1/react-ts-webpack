import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {FunctionComponent, ReactElement} from 'react';

const App: FunctionComponent<{}> = (): ReactElement => {
  return <div>Hello TS yolo !</div>;
};

export default hot(App);
