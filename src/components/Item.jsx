import React from "react";
import Action from "./Action";
import ItemBody from "./ItemBody";
import { handleClickConfirm } from "./Alert";

const Item = ({ id, title, body, createdAt, archived, action }) => {
  const onDeleteNote = (item) => {
    handleClickConfirm(
      item,
      action,
      "delete",
      "Apa Kamu Yakin?",
      "Kamu tidak dapat membatalkan tindakan ini!",
      "warning",
      "Yes, Delete"
    );
  };

  const onArchiveNote = (item) => {
    !archived
      ? handleClickConfirm(
          item,
          action,
          "archive",
          "Apa Kamu Yakin?",
          "Kamu akan mengarsipkan Catatan ini?",
          "info",
          "Yes, archive it!"
        )
      : handleClickConfirm(
          item,
          action,
          "unarchive",
          "Apa Kamu Yakin?",
          "Kamu akan membatalkan Arsip Catatan ini?",
          "info",
          "Yes, unarchive it!"
        );
  };

  return (
    <div className="note-item">
      <ItemBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        action={action}
      />

      <Action
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        id={id}
        archived={archived}
      />
    </div>
  );
};

export default Item;
