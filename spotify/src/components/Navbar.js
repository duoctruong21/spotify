import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

export default function NavBar() {
  return (
    <div className="grid grid-cols-4 bg-slate-900 h-24 ">
      <div className="col-span-1 text-white text-center leading-[6rem] text-3xl">
        <i className="fa fa-spotify w-12 "></i>
        Spotify
      </div>
      <div className="flex items-center col-span-2 ">
        <div className="flex items-center rounded-3xl bg-white">
          <i className="fa fa-search mr-2 p-3 text-[20px] "></i>
          <form className="w-[400px]">
            <input
              type="text"
              className="h-10 rounded-3xl w-full focus:outline-none text-base"
              placeholder="What do you want to listen to..."
            />
          </form>
        </div>
      </div>
      <div className="col-span-1 m-auto text-white">
        <div className="flex">
          <a className="bg-white text-black p-5" href="#">
            Login
          </a>
          <a className="bg-white text-black p-5 ml-5" href="#">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
