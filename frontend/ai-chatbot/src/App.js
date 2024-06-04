// src/ChatApp.js
import React, { useState } from 'react';
import axios from 'axios';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const newMessage = { sender: 'user', text };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('http://localhost:8080/chat', {
        message: text,
      });

      const data = await response.json();

      console.log(data);
      const botMessages = response.data.map((msg) => ({
        sender: 'bot',
        text: msg.text,
      }));
      console.log('In line 27 App.js');
      setMessages([...messages, newMessage, ...botMessages]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chat-app">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
