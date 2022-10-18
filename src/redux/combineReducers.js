const combineReducers = (reducers) => {
    const allReducers = {};
    const combinedState = {};
    for (const property in reducers) {
        if (reducers.hasOwnProperty(property)) {
            if (typeof reducers[property] !== 'function') {
                throw new Error(
                    `reducer with key ${property} is not a function`
                );
            }
            allReducers[property] = reducers[property];
            const reducerInitialState = reducers[property](undefined, {
                type: 'INIT',
            });
            if (reducerInitialState === undefined) {
                throw new Error(
                    `got initial state undefined from ${property} reducer, expected defined/null value`
                );
            }
            combinedState[property] = reducerInitialState;
        }
    }
    const reducer = (currentState = combinedState, action) => {
        const newCombinedState = {};
        let hasStateChanged = false;
        for (const property in allReducers) {
            if (reducers.hasOwnProperty(property)) {
                if (typeof allReducers[property] !== 'function') {
                    throw new Error(
                        `reducer with key ${property} is not a function`
                    );
                }

                const currentReducer = allReducers[property];
                const currentReducerState = currentState[property];
                const nextReducerState = currentReducer(
                    currentReducerState,
                    action
                );

                newCombinedState[property] = nextReducerState;
                const areStateEqual = nextReducerState === currentReducerState;
                hasStateChanged |= !areStateEqual;
            }
        }
        return hasStateChanged ? newCombinedState : currentState;
    };
    return { allReducers: reducer, initialState: combinedState };
};

export { combineReducers };
