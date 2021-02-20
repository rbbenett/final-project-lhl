import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

import './Messages.css';

export default function Messages({ messages }) {
  return (
    <ScrollToBottom className="messages">
      {messages.map(({ user, text }, index) => (
        <div key={index}>
          <Message message={text} name={user} />
        </div>
      ))}
    </ScrollToBottom>
  );
}