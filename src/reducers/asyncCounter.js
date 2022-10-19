import { DECREMENT_ASYNC, INCREAMENT_ASYNC } from '../constants';

const asyncCounter = (state = { asyncCount: 0 }, action) => {
    switch (action.type) {
        case INCREAMENT_ASYNC:
            return {
                ...state,
                asyncCount: state.asyncCount + (action.payload?.asyncCount | 0),
            };
        case DECREMENT_ASYNC:
            return {
                ...state,
                asyncCount: (state.asyncCount - action.payload?.asyncCount) | 0,
            };
        default:
            return state;
    }
};

export { asyncCounter };
