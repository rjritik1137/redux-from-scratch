import { useContext, useEffect, useState } from 'react';
import { ReduxContext } from './Provider';

export function useSelector(selector) {
    const { getState, subscribe } = useContext(ReduxContext);

    const [memo, setMemo] = useState(selector(getState()));

    useEffect(() => {
        const unSubscribe = subscribe((state) => {
            const value = selector(state);
            setMemo(value);
        });
        return () => {
            unSubscribe && unSubscribe();
        };
    }, [selector, subscribe]);

    return memo;
}

export function useDispatch() {
    const { dispatch } = useContext(ReduxContext);
    return dispatch;
}
