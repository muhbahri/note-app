import React from "react";

import ItemBody from "./ItemBody";
import Action from "./Action";

function Item({ judul, waktu, deskripsi, hapus, arsip }) {
  return (
    <div className="note-item">
      <ItemBody judul={judul} waktu={waktu} deskripsi={deskripsi} />
      <Action hapus={hapus} arsip={arsip} />
    </div>
  );
}

export default Item;
