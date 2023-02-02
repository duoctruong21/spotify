import React from "react";

export default function MenuBar() {
  return (
    <div className="col-span-1 bg-slate-900">
      <div className="text-white flex flex-col">
        <a href="#" className="p-5 hover:bg-white hover:text-black">
          Home
        </a>
        <a href="#" className="p-5 hover:bg-white hover:text-black">
          Your library
        </a>
        <a href="#" className="p-5 hover:bg-white hover:text-black">
          History
        </a>
        <a href="#" className="p-5 hover:bg-white hover:text-black">
          Personal page
        </a>
      </div>
    </div>
  );
}
