import React from "react";

function Details(prop) {
  return (
    <div>
      <p>
        <strong>Ph: </strong>
        {prop.ph}
      </p>
      <p>
        <strong>Mail: </strong>
        {prop.mail}
      </p>
    </div>
  );
}

export default Details;
