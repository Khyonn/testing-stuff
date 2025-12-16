import {
  createAsyncThunk,
  createSlice,
  nanoid,
  type PayloadAction,
} from "@reduxjs/toolkit";

import api from "../../api";

export const fetchAllNotes = createAsyncThunk("notes/getAll", () =>
  api.get(`${import.meta.env.BASE_URL}/mock-api/notes.json`).json<ApiObjects["Note"][]>()
);
export const createNote = createAsyncThunk(
  "notes/create",
  (formNote: { text: string; tag_id: ApiObjects["Tag"]["id"] }) => {
    // api.post(`${import.meta.env.BASE_URL}/mock-api/notes.json`).json<ApiObjects["Note"][]>()
    const date = new Date().toISOString().split("T")[0]!;
    return {
      id: nanoid(),
      ...formNote,
      created_at: date,
      updated_at: date,
    } as ApiObjects["Note"];
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState: [] as ApiObjects["Note"][],
  reducers: {
    addNote: (state, action: PayloadAction<ApiObjects["Note"]>) => {
      state.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<ApiObjects["Note"]["id"]>) => {
      return state.filter((Note) => Note.id === action.payload);
    },
    edit: (state, action: PayloadAction<ApiObjects["Note"]>) => {
      return state.map((Note) =>
        Note.id === action.payload.id ? action.payload : Note
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.fulfilled, (_state, action) => action.payload)
      .addCase(createNote.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const getNotes = (rootState: RootState) => rootState.notes;

export default notesSlice;
