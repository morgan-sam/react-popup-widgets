import React, { useState, useEffect } from "react";
import "css/chatbot.css";
import PopupHeader from "components/PopupHeader";
import icon from "img/customer-service.svg";
import { chatTree } from "js/chat";

const Chatbot = (props) => {
  const [lastActive, setLastActive] = useState(0);
  const [incoming, setIncoming] = useState(chatTree.text);
  const [options, setOptions] = useState(chatTree.text);
  const [conversation, setConversation] = useState([]);
  const { open, header, closePopup } = props;

  useEffect(() => {
    if (open) {
      setInterval(() => {
        setLastActive((time) => time + 1);
      }, 1000);
    }
  }, [open]);

  useEffect(() => {
    if (incoming.length > 0) {
      setConversation((cur) => [...cur, { speaker: "bot", text: incoming[0] }]);
      setIncoming((cur) => cur.slice(1));
    } else {
      setOptions(chatTree.options);
    }
  }, [lastActive]);

  return (
    <div className="corner-container bottom-left open">
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">
          <img src={icon} className="chatbot-icon" />
          <div className="conversation">
            {conversation.map((el) => (
              <div className={`message ${el.speaker}`}>{el.text}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
