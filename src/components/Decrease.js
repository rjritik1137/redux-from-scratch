import { DECREMENT } from '../constants';
import { useDispatch } from '../react-redux/useDispatchHook';

export const Decrease = (props) => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => {
                dispatch({ type: DECREMENT });
            }}
        >
            Decrease
        </button>
    );
};
