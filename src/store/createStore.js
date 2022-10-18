import { allReducers, initialAppState } from '../reducers/combinedReducers';
import { createStore } from '../redux/createStore';

export const store = createStore(allReducers, initialAppState);
