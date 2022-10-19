import { DECREMENT_ASYNC, INCREAMENT_ASYNC } from '../constants';

export function increaseCount(data) {
    return {
        type: INCREAMENT_ASYNC,
        payload: data,
    };
}

export function decreaseCount(data) {
    return {
        type: DECREMENT_ASYNC,
        payload: data,
    };
}

export const asyncIncreaseCount = (data) => {
    return async (dispatch, getState) => {
        setTimeout(() => dispatch(increaseCount(data)), 2000);
    };
};

export const asyncDecreaseCount = (data) => {
    return (dispatch, getState) => {
        dispatch(decreaseCount(data));
    };
};
