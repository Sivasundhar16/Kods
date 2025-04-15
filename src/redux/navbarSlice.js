import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    showNavbar: false,
  },
  reducers: {
    showNavbar: (state) => {
      state.showNavbar = true;
    },
    hideNavbar: (state) => {
      state.showNavbar = false;
    },
  },
});

export const { showNavbar, hideNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
