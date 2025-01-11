import React, { useState } from "react";
import Input from "./Input";
import { handleClick } from "./Alert";

const Content = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !body) {
      handleClick({
        title: "Error",
        text: "Judul dan Catatan perlu diisi!",
        icon: "error",
      });
      return;
    }

    const id = new Date().toISOString();
    const note = { id, title, body, archived: false, createdAt: id };

    setNotes((prevNotes) => [...prevNotes, note]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <h2>Catatan Baru</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Huruf Tersisa: {50 - title.length}
        </p>
        <Input
          value={title}
          onChange={setTitle}
          name="title"
          type="text"
          placeholder="Tulis Judul..."
        />
        <Input
          value={body}
          onChange={setBody}
          name="body"
          type="textarea"
          placeholder="Tulis Catatan disini..."
        />
        <button
          type="submit"
          className="create-btn"
          onClick={() =>
            handleClick({
              title: "Catatan berhasil dibuat",
              text: `Catatan berjudul "${title}" telah dibuat`,
              icon: "success",
            })
          }>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Content;
