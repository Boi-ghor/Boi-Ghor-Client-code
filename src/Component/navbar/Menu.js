import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="bg-primary py-2 mt-4">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center">
            <HiOutlineBars3CenterLeft
              size={40}
              className="text-white cursor-pointer lg:hidden"
              onClick={handleToggleSidebar}
            />

            <div className="menuItems hidden lg:block">
              <ul className="menu menu-horizontal text-white text-lg">
                <li>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="/new"
                  >
                    Book
                  </NavLink>
                </li>
                <li tabIndex={0}>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="category"
                  >
                    Category
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </NavLink>
                  <ul className="p-2 bg-base-200 text-neutral rounded-lg">
                    <li>
                      <NavLink to="/category/">Category 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/category/">Category 2</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="/blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="searchBox">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered rounded-l outline-none h-10 w-52 sm:w-80"
                  />
                  <button className="btn btn-square rounded-r h-10 min-h-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sidebar fixed top-0 w-80 max-w-sm h-full bg-white shadow-2xl duration-300 lg:hidden ${
          showSidebar ? "left-0" : "-left-80"
        }`}
      >
        <div className="sidebarHeader border-b px-4 py-5">
          <div className="flex justify-end">
            <span className="cursor-pointer" onClick={handleToggleSidebar}>
              <RxCross1 size={26} />
            </span>
          </div>
        </div>
        <div className="sidebarBody px-4 py-5">
          <ul className="text-xl">
            <li className="mb-2">
              <NavLink className="block" to="/">
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="block" to="/collections">
                Collections
              </NavLink>
            </li>

            <div className="collapse collapse-plus -mt-4 text-xl">
              <input className="bg-transparent" type="checkbox" />
              <div className="collapse-title px-0 bg-transparent">Category</div>
              <div className="collapse-content">
                <ul className="-mt-1 -mb-4">
                  <li className="mb-2">
                    <NavLink className="block" to="/cateogry">
                      Category 1
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className="block" to="/cateogry">
                      Category 2
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className="block" to="/cateogry">
                      Category 3
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink className="block" to="/cateogry">
                      Category 4
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <li className="mb-2">
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
