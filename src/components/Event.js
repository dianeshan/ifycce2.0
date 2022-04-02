import React, {useState} from "react";
import WindowDimensions from "./WindowDimensions";
import Modal from '@mui/material/Modal';

const Event = (props) => {

    const date = props.date?.split(' ').map(s => <p className="event-date">{s}</p>);
    const title = props.title?.split(':').map(s => <p className="event-detail-title">{s}</p>);
    const time = props.time;
    const content = props.content;
    const link = props.link;
    const img = props.img;

    const {width, height} = WindowDimensions();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    console.log(width);
    return(
        <div className="Event">
            <div className="event-date-card">
                {date}
            </div>
            <div className="event-card">
                <img src={img} className="event-flyer" onClick={handleClick}></img>
                <div className="event-detail">
                    {title}
                    <p className="event-detail-time">{time}</p>
                    <p className="event-detail-content">{content}</p>
                    <p className="event-detail-link-container"><a className="event-detail-link" href={link} target="_blank">Sign-Up</a></p>
                </div>
            </div>
            <Modal 
                open={open}>
                <div onClick={handleClick}>
                    <img src={img} className="event-flyer-modal"></img>
                </div>
            </Modal>
        </div>
    );
}

export default Event;