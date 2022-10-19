import React, { createContext } from 'react';

export const ReduxContext = createContext(null);
const Provider = ({ store, children }) => {
    return (
        <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
    );
};
export default Provider;
