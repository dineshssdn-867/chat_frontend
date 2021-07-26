import React, { createContext, useReducer } from "react";
import {
    updateChatReducer,
    updateChatState,
    userDetailState,
    userDetailReducer
  } from "./reducers";


const reduceReducers = (...reducers) => (prevstate, value, ...args) => 
    reducers.reduce(
        (newState, reducer) => reducer(newState, value, ...args), prevstate
    );


const combinedReducers = reduceReducers(updateChatReducer, userDetailReducer);

const initialState = {
      ...updateChatState,
      ...userDetailState,
  }  

const store = createContext(initialState)
const { Provider } = store;

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(combinedReducers, initialState);

    return <Provider value={{ state, dispatch }}>
        {children}
    </Provider>;
};

export {store, StoreProvider}; 