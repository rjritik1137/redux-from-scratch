import { combineReducers } from '../redux/combineReducers';
import { counter } from './counter';

const { allReducers, initialState: initialAppState } = combineReducers({
    counter,
});
export { allReducers, initialAppState };
