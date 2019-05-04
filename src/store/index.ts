import * as Counter from './Counter';
import {combineReducers} from 'redux';

export const reducers = combineReducers({
  counter: Counter.reducer,
});

export type AppState = ReturnType<typeof reducers>;
