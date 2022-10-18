import { DECREASE_100 } from '../constants';
import { useDispatch, useSelector } from '../react-redux';
const decreaseCountSelector = (state) => state.decreaseCounter;
const BigDecrease = (props) => {
    const decreaseCounter = useSelector(decreaseCountSelector);

    const dispatch = useDispatch();
    return (
        <div>
            <p>My decreaes count is {decreaseCounter.count}</p>
            <button onClick={() => dispatch({ type: DECREASE_100 })}>
                Decrease my count by 100
            </button>
        </div>
    );
};

export { BigDecrease };
