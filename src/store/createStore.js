import { allReducers, initialAppState } from '../reducers/combinedReducers';
import { createStore } from '../redux';

export const store = createStore(allReducers, initialAppState);
