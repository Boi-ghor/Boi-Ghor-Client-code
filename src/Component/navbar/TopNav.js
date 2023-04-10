import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="container mx-auto px-2 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b">
          <h5 className="text-textColorLight text-sm font-light tracking-wider text-center">
            WOW Offers! 60-80% Off For All Story Books
          </h5>
          <div className="flex items-center">
            <select className="select select-sm text-textColorLight focus:outline-none font-light">
              <option>Language</option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
            </select>
            <select className="select select-sm text-textColorLight focus:outline-none font-light">
              <option>Currency</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>INR</option>
            </select>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <NavLink to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
