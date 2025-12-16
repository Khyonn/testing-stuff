type Timed = {
  created_at: string;
  updated_at: string;
};
type Tag = { id: string; name: string } & Timed;
type Note = { id: string; text: string; tag_id: Tag["id"] } & Timed;

declare global {
  interface ApiObjects {
    Tag: Tag;
    Note: Note;
  }
}
