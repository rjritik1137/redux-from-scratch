import { DECREASE_100 } from '../constants';

const decreaseCounter = (state = { count: -100 }, action) => {
    switch (action.type) {
        case DECREASE_100:
            return { ...state, count: state.count - 100 };
        default:
            return state;
    }
};

export { decreaseCounter };
