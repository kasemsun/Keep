import React from "react";

export default function (props) {
  return (

      <div className="notes">
        <h1>{props.title}</h1>
        <p> {props.content}</p>
      </div>
  );
}
