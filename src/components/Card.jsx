import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(prop) {
  return (
    <div className="person-cont">
      <div className="person">
        <p>{prop.id}</p>
        <h2>{prop.name}</h2>
        <div className="image-cont">
          <Avatar link={prop.link} />
        </div>
      </div>
      <div className="per-det">
        <Details ph={prop.ph} mail={prop.mail} />
      </div>
    </div>
  );
}

export default Card;
