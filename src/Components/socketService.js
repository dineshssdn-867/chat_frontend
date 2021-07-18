import React, {useEffect} from 'react';
import openSocket from "socket.io-client";

const SOCKET_URL = "https://chatwithds.dsdinesh.me:2053"


export const SocketService = () => {

    const setupSocket = () => {
        let socket = openSocket(SOCKET_URL);
        
        socket.on("command", (data) => {
            console.log(data);
            console.log(socket);
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