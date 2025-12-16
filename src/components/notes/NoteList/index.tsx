import styles from "./styles.module.css";

type NoteListProps = {
  notes?: ApiObjects["Note"][];
};
export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className={styles.note_list}>
      {notes?.map((note) => (
        <li key={note.id} className={styles.note_item}>{note.text}</li>
      ))}
    </ul>
  );
}
