import React from "react";
import './EventCalendar.css';

const EventCalendar = () => {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FManila&showTz=0&src=ZWp0ZXJhbmlhQGdtYWlsLmNvbQ&src=ZW4ucGhpbGlwcGluZXMjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%230B8043"
        className="responsive-iframe"
        frameBorder="0"
        scrolling="no"
        title="Team Dugong Bughaw Calendar"
      />
    </div>
  );
};

export default EventCalendar;
