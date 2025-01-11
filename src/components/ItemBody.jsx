import React from "react";

function ItemBody({ judul, waktu, deskripsi }) {
  return (
    <div className="note-item-body">
      <h3 className="note-item-judul">{judul}</h3>
      <h6 className="note-item-waktu">{waktu}</h6>
      <p className="note-item-deskripsi">{deskripsi}</p>
    </div>
  );
}

export default ItemBody;
