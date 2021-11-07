import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  notificationData: null,
};

const UISlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showNotifications(state, action) {
      state.notificationData = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message
      };
    }
  },
});

export const uiActions = UISlice.actions;

export default UISlice.reducer;
