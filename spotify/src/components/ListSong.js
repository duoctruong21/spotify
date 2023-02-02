import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  const { DataSongs, handleSetSong, Song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdSong(Song.id);
  }, [Song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="text-white table-auto w-full ">
        <thead className="h-12 ">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className=" fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`h-12 hover:bg-gray-400 hover:text-black ${
                idSong === song.id && "bg-gray-400 text-black font-bold"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
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
