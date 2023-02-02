import React, { useContext } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { Song } = useContext(Songs);
  return (
    <div className="col-span-1 w-full">
      <div className=" w-[300px] m-auto mt-5 m-5">
        <img className="w-full" src={Song.links.images[0].url} />
      </div>
      <h1 className="text-white text-center text-xl">{Song.name}</h1>
      <h2 className="text-white text-center text-ms">(Singer)</h2>
      <div className="text-white text-center">
        <span className="text-ms">{Song.author}</span>
      </div>
    </div>
  );
}
