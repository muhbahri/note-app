import React from "react";

function Action(hapus, arsip) {
  return (
    <div className="note-item__action">
      <button className="btn-hapus">Hapus</button>
      <button className="btn-arsip">Arsipkan</button>
    </div>
  );
}

export default Action;
