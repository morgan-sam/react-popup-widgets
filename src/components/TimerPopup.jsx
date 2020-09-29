import React, { useEffect, useState } from "react";
import PopupHeader from "./PopupHeader.jsx";

const COUNTDOWN_TIMER_LENGTH = 300;

const TimerPopup = (props) => {
  const { open, header, closePopup } = props;
  const [timer, setTimer] = useState(COUNTDOWN_TIMER_LENGTH);

  useEffect(() => {
    if (open) {
      const id = setInterval(() => setTimer((time) => time - 1), 1000);
      return () => clearInterval(id);
    } else setTimer(COUNTDOWN_TIMER_LENGTH);
  }, [open]);

  const intToTwoDecimals = (num) =>
    num.toString().length > 1 ? num.toString() : "0" + num.toString();

  const getTimeObject = (totalTime) => {
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;
    return { hours, minutes, seconds };
  };

  const formatTime = (timeInSecs) => {
    let time = getTimeObject(timeInSecs);
    Object.keys(time).forEach((key) => {
      time[key] = intToTwoDecimals(time[key]);
    });
    return `${time.hours}:${time.minutes}:${time.seconds}`;
  };

  return (
    <div className={`overlay-popup-container ${open ? "open" : ""}`}>
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">
          <div>{formatTime(timer)}</div>
        </div>
      </div>
    </div>
  );
};

export default TimerPopup;
