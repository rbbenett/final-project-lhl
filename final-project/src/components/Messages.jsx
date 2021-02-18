import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
  {messages.map(({ user, date, text }, index) => (
    <div key={index}>
      <Message message={text} name={user}/>
      {/* {text} */}
    </div>
    ))}
  </ScrollToBottom>
);

export default Messages;