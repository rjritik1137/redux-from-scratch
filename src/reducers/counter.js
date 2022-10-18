import { DECREMENT, INCREAMENT } from '../constants';

const counter = (state = { count: 0 }, action) => {
    switch (action.type) {
        case INCREAMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export { counter };
