import { DECREMENT } from '../constants';
import { useDispatch } from '../react-redux';

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
