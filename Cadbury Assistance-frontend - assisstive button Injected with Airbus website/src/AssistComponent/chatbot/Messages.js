import React,{ useEffect, useRef } from "react";
import "./style.css";
import Message from "./Message";

const Messages = ({ messages }) => {
  console.log("Messages: " + messages);

  const messagesEndRef = useRef(null);

  console.log(messagesEndRef)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);


  return (
    <div className="messagesSection">
      {messages.map((message, index) => {
        return (
          <div key={index} className="messagesContainer">
            <Message message={message} />
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>

  );

};

export default Messages;