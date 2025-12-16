import { Link, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { createNote, fetchAllNotes } from "../../../../store/features/notes";
import {
  createTag,
  fetchAllTags,
  getTags,
} from "../../../../store/features/tags";
import { selectNotesByTag } from "../../../../store/selectors";
import { AddNoteForm, NoteList } from "../../../../components/notes";

import styles from "./styles.module.css";

export default function Dashboard() {
  const { tagID } = useSearch({ from: "/" });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllNotes());
    dispatch(fetchAllTags());
  }, []);

  const tags = useAppSelector(getTags);
  const notesByTagID = useAppSelector(selectNotesByTag);
  const notes = notesByTagID[tagID!];

  return (
    <div className={styles.root_container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.content_container}>
        <div className={styles.form_container}>
          <AddNoteForm
            onSubmit={async (newnote) => {
              let tag_id = newnote.tag_id;
              if (newnote.tag_text) {
                tag_id = (await dispatch(createTag(newnote.tag_text)).unwrap())
                  .id;
              }
              dispatch(createNote({ tag_id: tag_id!, text: newnote.text }));
            }}
            tags={tags}
          />
        </div>
        <div>
          <ul className={styles.tabs}>
            {tags.map((tag) => (
              <li key={tag.id}>
                <Link to="/" search={{ tagID: tag.id }}>
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}
