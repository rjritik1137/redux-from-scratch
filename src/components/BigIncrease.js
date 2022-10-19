import { INCREASE_100 } from '../constants';
import { useDispatch } from '../react-redux';
import { useSelector } from '../react-redux';
const increaseCountSelector = (state) => state.increaseCounter;
const BigIncrease = (props) => {
    const dispatch = useDispatch();
    const increaseCount = useSelector(increaseCountSelector);
    return (
        <div>
            <p>My bigIncrease count is {increaseCount.count}</p>
            <button onClick={() => dispatch({ type: INCREASE_100 })}>
                Increase my count by 100
            </button>
        </div>
    );
};

export { BigIncrease };
