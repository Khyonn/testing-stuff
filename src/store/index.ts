import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import authSlice from "./features/auth";
import tagsSlice from "./features/tags";
import notesSlice from "./features/notes";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [tagsSlice.name]: tagsSlice.reducer,
    [notesSlice.name]: notesSlice.reducer,
  },
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
}

// hooks
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppStore = useStore.withTypes<typeof store>();

export default store;
