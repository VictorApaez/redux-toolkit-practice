import { configureStore, createSlice } from "@reduxjs/toolkit";
// https://redux-toolkit.js.org/introduction/getting-started

const songsSlice = createSlice({
  // name must be unique
  name: "song",
  initialState: ["Smells Like Teen Spirit", "Billie Jean ", "September"],

  // RTK is built with Immer (allows direct changes to state)
  reducers: {
    addSong(state, action) {
      // action is an object we will pass into dispatch in the front-end
      // assuming payload will be a string with a song title
      state.push(action.payload);
    },
    removeSong(state, action) {
      const i = state.indexOf(action.payload);
      state.splice(i, 1);
    },
  },
});

//Add the slice we just created into the store
const store = configureStore({
  reducer: {
    // notice plural "songs" and singular "reducer" - this is not the "reducers" method in songsSlice
    songs: songsSlice.reducer,
  },
});

// for debugging purposes this return the current state:
// console.log(store.getState());

export { store };
export const { addSong, removeSong } = songsSlice.actions;
