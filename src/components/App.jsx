import React from "react";
import Contact from "../contacts.js";
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";

function carlLoop(contact) {
  return (
    <Card
      key={contact.key}
      id={contact.key}
      name={contact.name}
      ph={contact.ph}
      mail={contact.mail}
      link={contact.link}
    />
  );
}

function App() {
  return (
    <div className="app-cont">
      <h1>My Contact</h1>
      <Avatar link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WuXJk9qIKoiAxvGHjKlDHP8vmcX9h1cZpvtaaDSJYQ&s" />
      {Contact.map(carlLoop)}
    </div>
  );
}

export default App;
