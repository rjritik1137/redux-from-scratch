import { combineReducers } from '../redux/combineReducers';
import { counter } from './counter';
import { decreaseCounter } from './decreaseCounter';
import { increaseCounter } from './increaseCounter';
import { asyncCounter } from './asyncCounter';

const { allReducers, initialState: initialAppState } = combineReducers({
    counter,
    increaseCounter,
    decreaseCounter,
    asyncCounter,
});
export { allReducers, initialAppState };
