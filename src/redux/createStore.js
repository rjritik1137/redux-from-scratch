const createStore = (reducer, preLoadedState) => {
    let currentState = preLoadedState;
    let currentListeners = [];

    const store = {
        getState() {
            return currentState;
        },
        dispatch(action) {
            if (typeof action === 'function') {
                action(store.dispatch, store.getState);
                return action;
            }
            let nextState = reducer(currentState, action);
            if (nextState !== currentState) {
                currentState = nextState;
                currentListeners.forEach((fn) => fn(currentState));
            }
            nextState = null;
            return action;
        },
        subscribe(fn) {
            let isSubscribed = true;
            currentListeners.push(fn);
            return () => {
                if (!isSubscribed) return;
                const index = currentListeners.indexOf(fn);
                currentListeners.splice(index, 1);
                isSubscribed = false;
            };
        },
    };
    return store;
};

export { createStore };
