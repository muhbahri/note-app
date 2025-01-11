import React from "react";
import { getInitialData } from "../utils";
import List from "./List";

function Body() {
  const notes = getInitialData();
  return (
    <div className="note-app">
      <h1>Catatan</h1>
      <List notes={notes} />
    </div>
  );
}

export default Body;
