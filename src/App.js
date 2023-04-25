import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import Data from "./data/db.json";
import Playing from "./components/Playing";
import React, { useContext, useState } from "react";

function App() {
  const [song, setSong] = useState(Data[0]);

  const handleSetSong = (idSong) => {
    const song = Data.find((song) => song.id === idSong) || Data[0];
    // if (!song) {
    //   setSong(Data[0]);
    // } else {
    //   setSong(song);
    // }
    setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ Data, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/*span 1 */}
          <DetailSong />

          {/*span 2 */}
          <ListSongs setSong={setSong} />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
