import React, {useEffect, useContext} from 'react';
import openSocket from "socket.io-client";
import {store} from '../stateManagment/store';
import {
    activeChatAction
  } from "../stateManagment/actions";
const SOCKET_URL = "https://chatwithds.dsdinesh.me:2053"


let socket;

export const SocketService = () => {

    const {dispatch, state:{userDetail} } = useContext(store);

    const setupSocket = () => {
        socket = openSocket(SOCKET_URL);
        
        socket.on("command", (data) => {
            console.log(data);
            if(userDetail !== data.receiver) return;
            dispatch({type: activeChatAction, payload: data});
        });
    };
    console.log(userDetail);
    // eslint-disable-next-line
    useEffect(setupSocket, [userDetail]);

    return <></>;
};


const sendSocket = (data) => {
    socket.emit("command", {
        type: data.type,
        id: data.id,
        content: data.content,
    });
};

export const sendTestSocket = (data) => {
    socket.emit("command", data);
};