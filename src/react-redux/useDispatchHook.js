import { useContext } from 'react';
import { ReduxContext } from './Provider';

export default function useDispatch() {
    const { dispatch } = useContext(ReduxContext);
    return dispatch;
}
