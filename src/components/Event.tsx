import { useState } from "react";
import { Modal } from "react-bootstrap";

const Event = (props: { title: any; subtitle?: any; time: any; secondTime: any; content: any; link: any; img: any; }) => {
  const title = props.title;
  const subtitle = props.subtitle;
  const time = props.time;
  const secondTime = props.secondTime;
  const content = props.content;
  const link = props.link;
  const img = props.img;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="Event">
      <div className="event-card">
        <img src={img} className="event-flyer" onClick={handleClick}></img>
        <div className="event-detail">
          <p className="event-detail-time">{time}</p>
          <p className="event-detail-time">{secondTime}</p>
          <p className="event-detail-title">{title}</p>
          <p className="event-detail-subtitle">{subtitle}</p>
          <p className="event-detail-content">{content}</p>
          <p className="event-detail-link-container">
            <a className="event-detail-link" href={link} target="_blank">
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
          <img src={img} className="event-flyer-modal"></img>
        </div>
      </Modal>
    </div>
  );
};

export default Event;
