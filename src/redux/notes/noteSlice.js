import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: "1",
        title: "deneme",
        description: "deneme açıklaması",
        color: "red",
      },
      {
        id: "2",
        title: "deneme",
        description: "deneme açıklaması",
        color: "red",
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
  },
});

export const { addNewNote, setSearchNote } = notesSlice.actions;
export default notesSlice.reducer;
