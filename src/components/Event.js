import React, { useState } from "react";
import { Modal } from "react-bootstrap";

// import WindowDimensions from "./WindowDimensions";

const Event = (props) => {
  const date = props.date
    ?.split(" ")
    .map((s) => <p className="event-date">{s}</p>);
  const title = props.title;
  const subtitle = props.subtitles;
  const time = props.time;
  const secondTime = props.secondTime;
  const content = props.content;
  const link = props.link;
  const img = props.img;

  // const { width, height } = WindowDimensions();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="Event">
      <div className="event-card">
        <img
          src={img}
          alt="event-flyer"
          className="event-flyer"
          onClick={handleClick}
        ></img>
        <div className="event-detail">
          <p className="event-detail-time">{time}</p>
          <p className="event-detail-time">{secondTime}</p>
          <p className="event-detail-title">{title}</p>
          <p className="event-detail-subtitle">{subtitle}</p>
          <p className="event-detail-content">{content}</p>
          <p className="event-detail-link-container">
            <a
              className="event-detail-link"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Join meeting
            </a>
          </p>
        </div>
      </div>
      <Modal
        open={open}
        className="event-flyer-modal-container"
        onClick={handleClick}
      >
        <div>
          <img src={img} alt="event-flyer" className="event-flyer-modal"></img>
        </div>
      </Modal>
    </div>
  );
};

export default Event;
