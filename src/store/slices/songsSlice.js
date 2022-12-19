import { createSlice } from "@reduxjs/toolkit";
import { resetState } from "../actions";

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

    // NOT USING reset
    // instead of doing it here I do it in actions.js because this logic can be used by multiple Slices (currently only have 1 - songsSlice)
    reset(state, action) {
      // this will not work because immer expects you to change state variable and this is reassigning state
      // state = []

      // correct way to reset
      return [];
    },
  },

  // This allows dispatch to listen to additional actions (in this case "state/reset") we can add this code to multiple Slices
  extraReducers(builder) {
    builder.addCase(resetState, (state, action) => {
      return [];
    });
  },
});

//deconstruction because actions is an object
export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
