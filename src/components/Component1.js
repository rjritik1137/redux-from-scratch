import React from 'react';
import { connect } from '../react-redux/connect';
const Component1 = (props) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
