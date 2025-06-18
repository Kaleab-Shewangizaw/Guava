import React from "react";
import Logo from "../../assets/guava-icon.svg";
import {
  FaBolt,
  FaBookmark,
  FaHome,
  FaLayerGroup,
  FaPeopleCarry,
  FaUser,
} from "react-icons/fa";
import { FaGear, FaUserGroup } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div className="w-[15%] border">
      <div className={`flex flex-col gap-10`}>
        <img
          src={Logo}
          alt="Guava Logo"
          className="w-[40px] h-[40px] mr-0 p-0  "
        />
        <ul className={`flex flex-col gap-6 text-xl`}>
          <li className="flex items-center  gap-3">
            <FaHome /> Home
          </li>
          <li className="flex items-center cursor-pointer  gap-3">
            <FaUserGroup /> Communities
          </li>
          <li className="flex items-center cursor-pointer gap-3">
            <FaBookmark /> Bookmarks
          </li>
          <li className="flex items-center cursor-pointer gap-3">
            <FaUser /> Profile
          </li>
          <li className="flex items-center cursor-pointer gap-3">
            <FaBolt /> Trending
          </li>
          <li className="flex items-center cursor-pointer gap-3">
            <FaGear /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
