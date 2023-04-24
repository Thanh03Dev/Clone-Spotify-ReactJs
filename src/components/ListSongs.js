import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { Data, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);

  const handlePlaysong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full font-semibold">
        <thead className="text-white h-12">
          <tr>
            <td className="w-[10%]">#</td>
            <td className="text-left">Title</td>
            <td className="w-[10%]">Author</td>
            <td className="w-[10%]">
              <i className="fa fa-download"></i>
            </td>
          </tr>
        </thead>

        <tbody>
          {Data.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-400 hover:bg-opacity-40 hover:text-cyan-500 
               ${idSong === song.id && "text-teal-400 bg-gray-600"}`}
              onClick={() => handlePlaysong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href="{song.url}">
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
