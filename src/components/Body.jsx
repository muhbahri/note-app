import React from "react";
import Content from "./Content";
import List from "./List";

const Body = ({ notesAll, notesArchive, setNotes }) => (
  <div className="note-app__body">
    <Content setNotes={setNotes} />
    <List label="Semua Catatan" setNotes={setNotes} notes={notesAll} />
    <List label="Arsip Catatan" setNotes={setNotes} notes={notesArchive} />
  </div>
);

export default Body;
