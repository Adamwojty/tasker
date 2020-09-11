import React, { createContext, useReducer } from 'react';
import { IInitialContext, IStateProvider } from './models';
import { reducer, initialState } from './reducer';

export const store = createContext({} as IInitialContext);

export const StateProvider: React.FC<IStateProvider> = ({ children }) => {
    const { Provider } = store;
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
