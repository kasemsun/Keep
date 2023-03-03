import React from "react";


export default function () {

  const year = new Date().getFullYear();

  return (
    <footer>
      <p>copyright {year}</p>
    </footer>
  );
}