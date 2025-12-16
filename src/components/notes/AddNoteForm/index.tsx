import { Button, Combobox, Label, Textarea } from "../../ui";

import styles from "./styles.module.css";
type FormNote = {
  text: ApiObjects["Note"]["text"];
  tag_id?: ApiObjects["Note"]["tag_id"];
  tag_text?: string;
};
type AddNoteFormProps = {
  onSubmit?: (note: FormNote) => void;
  tags?: ApiObjects["Tag"][];
};
export default function AddNoteForm({ tags, onSubmit }: AddNoteFormProps) {
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const text = formData.get("note") as string,
          tag_text = formData.get("tag") as string,
          tag_id = tags?.find((t) => t.name === tag_text)?.id;

        onSubmit?.(
          tag_id
            ? {
                text,
                tag_id,
              }
            : { text, tag_text }
        );
      }}
    >
      <div>
        <Label htmlFor="addnote_form-note">Note</Label>
        <Textarea id="addnote_form-note" name="note" required />
      </div>
      <div>
        <Label htmlFor="addnote_form-tag">Tag</Label>
        <Combobox id="addnote_form-tag" name="tag" type="text">
          {tags?.map((tag) => (
            <option key={tag.id} value={tag.name} />
          ))}
        </Combobox>
      </div>
      <Button type="submit">Add note</Button>
    </form>
  );
}
