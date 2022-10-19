import { useContext } from 'react';
import { ReduxContext } from './Provider';

export function useDispatch() {
    const { dispatch } = useContext(ReduxContext);
    return dispatch;
}
