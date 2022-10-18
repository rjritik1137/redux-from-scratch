import React from 'react';
import { connect } from '../react-redux/connect';
const App2 = (props) => {
    return (
        <div>
            <p>
                Hello, my count is <span>{props.count}</span>
            </p>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
    };
};

const App3 = connect(mapStateToProps, mapDispatchToProps)(App2);
export { App3 };
