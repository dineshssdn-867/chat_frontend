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

export const userDetailState = {
    userDetail: "",
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

export const userDetailReducer = (state, action) => {
    if(action.type === userDetailAction){
        return {
            ...state,
            userDetail: action.payload,
        };
    } else {
        return state;
    }
}
