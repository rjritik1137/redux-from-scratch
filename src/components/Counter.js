import React, { useCallback } from 'react';
import { useSelector } from '../react-redux';

export const Counter = () => {
    const selector = useCallback((state) => state.counter.count, []);
    const count = useSelector(selector);
    return <h1>Counter of the App is {count}</h1>;
};
