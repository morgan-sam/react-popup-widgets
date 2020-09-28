import React, { useState, useEffect } from "react";
import "css/chatbot.css";
import PopupHeader from "components/PopupHeader";
import icon from "img/customer-service.svg";

const Chatbot = (props) => {
  const [lastActive, setLastActive] = useState(0);
  const [conversation, setConversation] = useState([]);
  const { open, header, text, closePopup } = props;

  useEffect(() => {
    if (open) {
      setInterval(() => {
        setLastActive((time) => time + 1);
      }, 1000);
    }
  }, [open]);

  useEffect(() => {
    if (lastActive === 1)
      setConversation((cur) => [...cur, { speaker: "bot", text: "Hey!" }]);
    if (lastActive === 3)
      setConversation((cur) => [
        ...cur,
        { speaker: "bot", text: "What's up?" },
      ]);
    if (lastActive === 6)
      setConversation((cur) => [
        ...cur,
        { speaker: "bot", text: "Do you need help with anything?" },
      ]);
    if (lastActive === 9)
      setConversation((cur) => [
        ...cur,
        { speaker: "user", text: "No thank you!" },
      ]);
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
