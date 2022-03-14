import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parser from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localiser = dateFnsLocalizer({
  format,
  parser,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Conference",
    allDay: true,
    start: new Date(2022, 1, 27),
    end: new Date(2022, 1, 27),
  },
  {
    title: "Exam",
    allDay: true,
    start: new Date(2022, 2, 3),
    end: new Date(2022, 2, 10),
  },
  {
    title: "Vacation",
    start: new Date(2022, 2, 11),
    end: new Date(2022, 2, 25),
  },
];

const CalendarEvent = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvents = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className="calendarEvent">
      <div style={{ display: "none" }}>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvents}>
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localiser}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350, margin: "20px 50px" }}
      />
    </div>
  );
};

export default CalendarEvent;
