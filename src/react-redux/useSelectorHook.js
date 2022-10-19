import { useContext, useEffect, useState } from 'react';
import { ReduxContext } from './Provider';
const defaultEqualityFunction = (obj1, obj2) => obj1 === obj2;

function useSelector(selector, equalityFn = defaultEqualityFunction) {
    const { getState, subscribe } = useContext(ReduxContext);

    const [memo, setMemo] = useState(selector(getState()));

    useEffect(() => {
        const unSubscribe = subscribe((state) => {
            const value = selector(state);
            const isEqual = equalityFn(value, memo);
            if (!isEqual) setMemo(value);
        });
        return () => {
            unSubscribe && unSubscribe();
        };
    }, [selector, subscribe, memo, equalityFn]);

    return memo;
}
export default useSelector;
