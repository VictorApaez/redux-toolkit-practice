// https://redux-toolkit.js.org/introduction/getting-started
import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { resetState } from "./actions";
//Add the slice we created into the store
const store = configureStore({
  reducer: {
    // notice plural "songs"
    songs: songsReducer,
  },
});

// this is so all exports are from one file location when you import them in your components
export { store, addSong, removeSong, resetState };
