import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="chat-header"> </div>
      <div className="messages">
        <Message text="Hello" sent />
        <Message text="Hello , how are you ? " />
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatArea;
