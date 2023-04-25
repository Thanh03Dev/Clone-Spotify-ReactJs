import { Songs } from "../Context";
import React, { useContext } from "react";

export default function DetailSong() {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 bg-slate-700">
      <h2 className="text-[#38bdf8] font-bold h-6 mt-4 ml-2.5">Now playing</h2>

      <h2 className="text-neutral-400 text-2xl mt-1 ml-2.5">{song.name}</h2>

      <div className="w-[240px] m-auto mt-10">
        <img className="w-full" src={song.links?.images[0].url} />
      </div>

      <div className="flex justify-evenly items-center mt-5">
        <img
          className="w-[67px] rounded-full"
          src={song.links?.images[1].url}
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}
