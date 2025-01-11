import React from "react";
import Item from "./Item";

const List = ({ notes, label, setNotes }) => {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak Ada Catatan</p>
        ) : (
          notes.map((note) => (
            <Item action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
};

export default List;
