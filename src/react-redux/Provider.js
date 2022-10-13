import React, { createContext } from 'react';

export const ReduxContext = createContext(null);
export const Provider = ({ store, children }) => {
    return (
        <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
    );
};
