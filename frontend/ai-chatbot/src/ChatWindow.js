// src/ChatWindow.js
import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-message ${msg.sender}`}>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
