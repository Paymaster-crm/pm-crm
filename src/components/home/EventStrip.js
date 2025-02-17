import React from "react";
import "../../styles/event-strip.scss";

function EventStrip(props) {
  return (
    <div className="event-strip">
      <div className="event-messages">
        {props.events.map((event, index) => (
          <div key={index} className="event-message">
            {event.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventStrip;
