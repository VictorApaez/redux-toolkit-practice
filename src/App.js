import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong, resetState } from "./store/index";
import { useRef } from "react";

function App() {
  const songInput = useRef();
  const dispatch = useDispatch();

  // this will update whenever we make changes to state using dispatch
  const songs = useSelector((state) => {
    return state.songs;
  });

  function handleAddSong(e) {
    // addSong is the reducer we created in store/index.js
    // dispatch is built into redux
    e.preventDefault();
    dispatch(addSong(songInput.current.value));
    songInput.current.value = "";
  }
  function handleRemoveSong(song) {
    console.log(song);
    dispatch(removeSong(song));
  }

  function resetAll() {
    dispatch(resetState());
  }

  return (
    <div className="app">
      <form onSubmit={(e) => handleAddSong(e)}>
        <input type="text" ref={songInput} />

        <button>Add</button>
        <div className="reset" onClick={resetAll}>
          Reset All
        </div>
      </form>

      <ul>
        {songs.map((song, i) => {
          return (
            <div className="song" key={i}>
              <li>{song}</li>
              <button onClick={() => handleRemoveSong(song)}>remove</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
