import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

export default function Message(props) {
  let isSentByCurrentUser = false;
  const username = JSON.parse(localStorage.getItem("user_details"))?.username

  if (username === props.name.name) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{props.name.name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(props.message)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(props.message)}</p>
          </div>
          <p className="sentText pl-10 ">{props.name.name}</p>
        </div>
      )
  );
}