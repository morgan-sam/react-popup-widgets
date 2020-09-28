import React, { useState, useEffect } from "react";
import "css/chatbot.css";
import PopupHeader from "components/PopupHeader";
import TypingAnimation from "components/TypingAnimation";
import icon from "img/customer-service.svg";
import { chatTree } from "js/chat";

const Chatbot = (props) => {
  const [lastActive, setLastActive] = useState(0);
  const [currentChat, setCurrentChat] = useState(chatTree);
  const [incoming, setIncoming] = useState(chatTree.text);
  const [options, setOptions] = useState([]);
  const [conversation, setConversation] = useState([]);
  const { open, header, closePopup } = props;

  const shouldMessageSend = () => {
    if (incoming.length === 0) return false;
    else if (incoming[0].match("http") && lastActive > 0) return true;
    else if (lastActive > incoming[0].length / 24) return true;
    else return false;
  };

  const resetChat = () => {
    setCurrentChat(chatTree);
    setIncoming(chatTree.text);
    setConversation([]);
    setOptions([]);
  };

  const userSelectOption = (option) => {
    setConversation((cur) => [
      ...cur,
      { speaker: "user", text: option.answer },
    ]);
    setCurrentChat(option.response);
    setLastActive(0);
    setOptions([]);
  };

  const botSendMessage = () => {
    setConversation((cur) => [...cur, { speaker: "bot", text: incoming[0] }]);
    setIncoming((cur) => cur.slice(1));
    setLastActive(0);
  };

  useEffect(() => {
    if (open) {
      const id = setInterval(() => setLastActive((time) => time + 1), 1000);
      return () => clearInterval(id);
    }
  }, [open]);

  useEffect(() => setIncoming(currentChat.text), [currentChat]);

  useEffect(() => {
    const sendMessage = shouldMessageSend();
    if (sendMessage) botSendMessage();
    else if (incoming.length === 0) setOptions(currentChat.options);
  }, [lastActive]);

  return (
    <div className="corner-container bottom-left open">
      <div className={`chatbot popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">
          <img src={icon} className="chatbot-icon" />
          <div className="conversation">
            {conversation.map((el) => {
              if (el.text.match("http"))
                return (
                  <a href={el.text} className={`message ${el.speaker}`}>
                    {el.text}
                  </a>
                );
              else
                return <div className={`message ${el.speaker}`}>{el.text}</div>;
            })}
            {incoming.length > 0 && <TypingAnimation />}
          </div>
          {options && incoming.length === 0 && (
            <div className="options">
              {options.map((el) => (
                <button
                  className={`message option`}
                  onClick={() => userSelectOption(el)}
                >
                  {el.answer}
                </button>
              ))}
            </div>
          )}
          {incoming.length === 0 && currentChat.options === undefined && (
            <button
              className={`reset-btn message option`}
              onClick={() => resetChat()}
            >
              Reset Assistant
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
