import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        title: "deneme",
        description: "deneme açıklaması",
        color: "#9c27b0",
      },
      {
        id: "2",
        title: "deneme",
        description: "deneme açıklaması",
        color: "#ffeb3b",
      },
    ],
    searchNote: "",
  },
  reducers: {
    addNewNote: (state, action) => {
      const newNote = action.payload;
      state.items.push(newNote);
    },
    setSearchNote: (state, action) => {
      state.searchNote = action.payload;
    },
    removeNote: (state, action) => {
      const noteId = action.payload;
      state.items = state.items.filter((item) => item.id !== noteId);
    },
  },
});

export const { addNewNote, setSearchNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
