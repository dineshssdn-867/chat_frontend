  import {
    updateChatAction,
    userDetailAction,
    activeChatAction,
    activeChatUserAction,
      triggerRefreshUserListAction
  } from "./actions";

export const updateChatState = {
    chatState: false,
};

export const updateChatReducer = (state, action) => {
    if(action.type === updateChatAction){
        return {
            ...state,
            chatState: action.payload,
        };
    } else {
        return state;
    }
}

