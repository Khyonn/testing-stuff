import api from "../../api";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  type PayloadAction,
} from "@reduxjs/toolkit";

export const fetchAllTags = createAsyncThunk("tags/getAll", () =>
  api.get(`${import.meta.env.BASE_URL}/mock-api/tags.json`).json<ApiObjects["Tag"][]>()
);
export const createTag = createAsyncThunk("tags/create", (name: string) => {
  // api.post(`${import.meta.env.BASE_URL}/mock-api/tags.json`).json<ApiObjects["Tag"][]>()
  const date = new Date().toISOString().split("T")[0]!;
  return {
    id: nanoid(),
    name,
    created_at: date,
    updated_at: date,
  } as ApiObjects["Tag"];
});

const tagsSlice = createSlice({
  name: "tags",
  initialState: [] as ApiObjects["Tag"][],
  reducers: {
    addTag: (state, action: PayloadAction<ApiObjects["Tag"]>) => {
      state.push(action.payload);
    },
    removeTag: (state, action: PayloadAction<ApiObjects["Tag"]["id"]>) => {
      return state.filter((tag) => tag.id === action.payload);
    },
    edit: (state, action: PayloadAction<ApiObjects["Tag"]>) => {
      return state.map((tag) =>
        tag.id === action.payload.id ? action.payload : tag
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTags.fulfilled, (_state, action) => action.payload)
      .addCase(createTag.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const getTags = (rootState: RootState) => rootState.tags;

export default tagsSlice;
