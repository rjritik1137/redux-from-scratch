import { INCREASE_100 } from '../constants';

const increaseCounter = (state = { count: 100 }, action) => {
    switch (action.type) {
        case INCREASE_100:
            return { ...state, count: state.count + 100 };

        default:
            return state;
    }
};

export { increaseCounter };
