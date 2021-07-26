import React, { createContext, useReducer } from "react";
import {
    updateChatReducer,
    updateChatState,
    userDetailState,
    userDetailReducer,
    activeChatState,
    activeChatReducer
  } from "./reducers";


const reduceReducers = (...reducers) => (prevstate, value, ...args) => 
    reducers.reduce(
        (newState, reducer) => reducer(newState, value, ...args), prevstate
    );


const combinedReducers = reduceReducers(updateChatReducer, userDetailReducer, activeChatReducer);

const initialState = {
      ...userDetailState,
      ...updateChatState,
      ...activeChatState
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