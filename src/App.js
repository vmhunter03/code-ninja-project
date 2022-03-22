import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);
  const handleClose = () => {
    setShowModal(false);
  };

  console.log(showModal);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const subtitle = "All the latest events in MarioLand";
  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && 
        <EventList events={events} handleClick={handleClick}/>
       
        } 
      {/* <Modal>
            <h2>10% Off Coupon Code!!</h2>
            <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      <br />
      <button onClick={() => setShowModal(true)}>Show Modal</button>

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={false}>
          <h2>All feature is here</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            totam sunt distinctio excepturi iusto necessitatibus. Quos ab
            impedit dolores? Assumenda, perspiciatis? Quibusdam ullam quia quos
            error ea cumque, aperiam dicta?
          </p>
          <a href="#" onClick={handleClose}>
            <b>Click For More!</b>
          </a>
        </Modal>
      )}
    </div>
  );
}

export default App;
