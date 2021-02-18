import io from "socket.io-client";

import "bootstrap/dist/css/bootstrap.css";
import "./Chat.css";
import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import moment from "moment";

import TextContainer from './TextContainer';
import Messages from './Messages';
// import InfoBar from '../InfoBar/InfoBar';
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

    if(message) {
      socket.emit('send', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          {/* <InfoBar room={room} /> */}
          <Messages messages={messages} name={username} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>


    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-8">
    //       <h6>Messages</h6>
    //       <div id="messages">
    //         {messages.map(({ user, date, text }, index) => (
    //           // <div key={index} className="each-msg-container">
    //           //   <p className="each-msg-username">{user.name}</p>
    //           //   <p className="each-msg-text">{text}</p>
    //           //   <p className="each-msg-time">{moment(date).format("h:mma")}</p>
    //           // </div>
    //           <div key={index} className="row mb-2">
    //             <div className="col-md-3">
    //               {moment(date).format("h:mma")}
    //             </div>
    //             <div className="col-md-2">{user.name}</div>
    //             <div className="col-md-2">{text}</div>
    //           </div>
    //         ))}
    //       </div>
    //       <form onSubmit={submit} id="form">
    //         <div className="input-group">
    //           <input
    //             type="text"
    //             className="form-control"
    //             onChange={e => setMessage(e.currentTarget.value)}
    //             value={message}
    //             id="text"
    //           />
    //           <span className="input-group-btn">
    //             <button id="submit" type="submit" className="btn btn-primary">
    //               Send
    //             </button>
    //           </span>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="col-md-4">
    //       <h6>{users.length} typists online</h6>
    //       <ul id="users">
    //         {users.map(({ name, id }) => (
    //           <li key={id}>{name}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );

}
export default Chat
