import { INCREAMENT } from '../constants';
import { useDispatch } from '../react-redux/useDispatchHook';

export const Increase = (props) => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => {
                dispatch({ type: INCREAMENT });
            }}
        >
            Increase
        </button>
    );
};
