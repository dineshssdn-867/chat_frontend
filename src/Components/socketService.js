import React, {useEffect} from 'react';
import openSocket from "socket.io-client";

const SOCKET_URL = "https://chatwithds.dsdinesh.me:2053"

let socket;

export const SocketService = () => {

    const setupSocket = () => {
        socket = openSocket(SOCKET_URL);
        
        socket.on("command", (data) => {
            console.log(data);
        });
    };

    useEffect(setupSocket, []);

    return <></>;
};



/*const sendSocket = (data) => {
    socket.emit("command", {
        type: data.type,
        id: data.id,
        content: data.content,
    });
};*/

export const sendTestSocket = (data) => {
    socket.emit("command", data);
};