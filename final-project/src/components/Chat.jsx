import io from "socket.io-client";

import "bootstrap/dist/css/bootstrap.css";
import "./Chat.css";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import moment from "moment";

import TextContainer from './TextContainer';
import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';

import './Chat.css';

const username = JSON.parse(localStorage.getItem("user_details"))?.username

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling"]
});

const Chat = () => {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("username", username);
    });

    socket.on("users", users => {
      setUsers(users);
    });

    socket.on("message", message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("connected", user => {
      setUsers(users => [...users, user]);
    });

    socket.on("disconnected", id => {
      setUsers(users => {
        return users.filter(user => user.id !== id);
      });
    });
  }, []);

  // const submit = event => {
  //   event.preventDefault();
  //   socket.emit("send", message);
  //   setMessage("");
  // };

  const sendMessage = (event) => {
    event.preventDefault();
    setMessage('');
    if(message) {
      socket.emit('send', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <TextContainer users={users}/>
      <div className="chat-container">
          <InfoBar />
          <Messages messages={messages} name={username} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );

}
export default Chat
