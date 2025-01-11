import React from "react";
import Item from "./Item";

function List({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Item key={note.id} {...note} />
      ))}
    </div>
  );
}

export default List;
