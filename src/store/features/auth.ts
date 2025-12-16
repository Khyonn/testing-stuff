import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    disconnect(state) {
      state.token = "";
    },
  },
});

export const isAuthenticated = (rootState: RootState) => !!rootState.auth.token

export default authSlice;
