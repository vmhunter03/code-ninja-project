import "./NewEventForm.css";

import React, { useState, useRef } from "react";

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState('manchester')
  // const title = useRef();
  // const date = useRef();

  const resetForm = () => {
    //useState used
    setTitle("");
    setDate("");
    setLocation('manchester')
    // title.current.value = "";
    // date.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
    console.log(event);
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </label>
      <label >
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
