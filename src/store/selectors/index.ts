import { createSelector } from "@reduxjs/toolkit";

import { getNotes } from "../features/notes";

export const selectNotesByTag = createSelector(getNotes, (notes) =>
  Object.groupBy(notes, (note) => note.tag_id)
);
