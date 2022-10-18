import { combineReducers } from '../redux/combineReducers';
import { counter } from './counter';
import { decreaseCounter } from './decreaseCounter';
import { increaseCounter } from './increaseCounter';

const { allReducers, initialState: initialAppState } = combineReducers({
    counter,
    increaseCounter,
    decreaseCounter,
});
export { allReducers, initialAppState };
