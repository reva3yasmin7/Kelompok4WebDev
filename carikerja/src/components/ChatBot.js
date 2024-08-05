// src/components/ChatBot.js
import React, { useState } from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import chatBotLogo from '../assets/chat-bot-icon.svg'; // Ensure this path is correct
import logoImage from '../assets/carikerja1.png'; // Ensure this path is correct
import workbotImage from '../assets/carikerja1.png'; // Ensure this path is correct
import userImage from '../assets/user.png'; // Ensure this path is correct
import sendIcon from '../assets/send-icon.png'; // Ensure this path is correct

const ChatBot = () => {
    const [messages, setMessages] = useState([
      {
        sender: 'bot',
        text: 'Hai! Saya Workbot, sahabatmu dalam petualangan mencari peluang karir yang sempurna. Ada yang ingin kamu tanyakan tentang dunia kerja? Saya di sini untuk membantu kamu menavigasi perjalanan ini dan menemukan pekerjaan impianmu.',
        timestamp: '1 minute ago',
      },
    ]);
    const [input, setInput] = useState('');
    const [isVisible, setIsVisible] = useState(false);
  
    const handleSend = () => {
      if (input.trim()) {
        setMessages([...messages, { sender: 'user', text: input, timestamp: 'Just now' }]);
        setInput('');
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'bot', text: 'Sedang Berpikir....', timestamp: 'Just now' },
          ]);
        }, 500);
      }
    };
  
    return (
      <>
        <img
          src={chatBotLogo}
          alt="Chat Bot Logo"
          className="chat-bot-logo"
          onClick={() => setIsVisible(!isVisible)}
        />
        {isVisible && (
          <div className="chatbot">
            <Card className="chatbot-card">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={logoImage} alt="carikerja" className="logo" />
                  <span>carikerja</span>
                </div>
                <Button variant="link" className="text-danger" onClick={() => setIsVisible(false)}>
                  &#x2715;
                </Button>
              </Card.Header>
              <Card.Body className="chatbot-body">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.sender}`}>
                    <div className="message-content">
                      <img
                        src={message.sender === 'bot' ? workbotImage : userImage}
                        alt="avatar"
                        className="avatar"
                      />
                      <div>
                        <div className="message-text">{message.text}</div>
                        <div className={`message-timestamp ${message.sender}`}>{message.timestamp}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
              <Card.Footer className="chatbot-footer">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Tanyakan ke carikerja"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button variant="primary" onClick={handleSend}>
                    <img src={sendIcon} alt="Send" />
                  </Button>
                </InputGroup>
              </Card.Footer>
            </Card>
          </div>
        )}
      </>
    );
  };
  
  export default ChatBot;