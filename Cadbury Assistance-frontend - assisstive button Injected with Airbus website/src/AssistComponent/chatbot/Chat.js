import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Messages from "./Messages";

function Chat(props){
  const [responses, setResponses] = useState([{text:'Welcome to Airbus!! How can I help you?', isBot: true}]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageSubmit = message => {
    const data = {
      message
    };
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
    axios
      .post("https://chatbot1752.herokuapp.com/", data)
      .then(response => {
        const responseData = {
          text: response.data["fulfillmentText"] != "" ? response.data["fulfillmentText"] : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true
        };

        setResponses(responses => [...responses, responseData]);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };

  const handleMessageChange = event => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = event => {
    const message = {
      text: currentMessage,
      isBot: false
    };
    if (event.key == "Enter") {
      setResponses(responses => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage("");
    }
    
  };

  return (
    
    <div id = "chatSection" className="chatSection">
      <div className="botContainer">
        <div className="messagesContainer">
          <Messages messages={responses} />
        </div>
        <div className="inputSection">
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handleSubmit}
            placeholder="Say something..."
            className="messageInputField"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
