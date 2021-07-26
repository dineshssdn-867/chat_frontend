import React, { useState, useEffect, useContext } from 'react';
import {store} from './stateManagment/store';
import {
  userDetailAction,
} from "./stateManagment/actions";
import { sendTestSocket } from './Components/socketService';


const SimpleMessage = (props) => {
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const {dispatch} = useContext(store);

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch({type: userDetailAction, payload: name});
    setShowMessage(true);
  };

  return (
    <div>
      {!showMessage ? (
      <div>  
        <h3>Hello there, Please Enter your name</h3>
        <form onSubmit={onsubmit}>
          <input value={name} onChange={(e) => setName(e.target.value) } />
          <button type="submit">Submit</button>
        </form>
      </div>  
      ) : (
      <MessageInterface />
      )}
    </div>
  );
}

export default SimpleMessage;


const MessageInterface = (props) => {
  const [name, setName] = useState("");
  const [message, setMessage ] = useState('')
  const [messages, setMessages ] = useState([]);
  const [receiver, setReceiver] = useState('');

  const { state: { userDetail }, } = useContext(store);

  useEffect(() => {
    if(name != userDetail ) { setName(userDetail) }
  }, [userDetail])

  const submit = (e) => {
    e.preventDefault();
    let data = {
      sender: name,
      message,
      receiver
    };
    setMessages([...messages, data]);
    sendTestSocket(data);
  }

  return (
    <div>
      <h2>Hello {name}</h2>
      <form onSubmit={submit}>
        <input value={receiver} onChange={(e) => setReceiver(e.target.value)} />
        <br />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Send</button>
      </form>
      <br />
      {
        messages.length < 1 ? (
        <div> No messages yet </div>) : (
        messages.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.message}</h4>
              <small>{item.sender}</small>
            </div>
          );
        })
        )}
    </div>
  );
};