import React from 'react';
import { asyncDecreaseCount, asyncIncreaseCount } from '../action/asyncCounter';
import { useDispatch, useSelector } from '../react-redux';

export const AsyncCounter = (props) => {
    const counter = useSelector((state) => state.asyncCounter.asyncCount);

    const dispatch = useDispatch();
    return (
        <div>
            <h1>AsyncComponent counter value = {counter}</h1>
            <button
                onClick={() => dispatch(asyncIncreaseCount({ asyncCount: 10 }))}
            >
                Increase async counter by 10
            </button>
            <button
                onClick={() => dispatch(asyncDecreaseCount({ asyncCount: 10 }))}
            >
                Decrease async counter by 10
            </button>
        </div>
    );
};
