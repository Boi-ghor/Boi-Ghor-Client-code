import React, { useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { BsEnvelope, BsCheck2Square } from "react-icons/bs";
import { MdOutlineDangerous } from "react-icons/md";
import { RiTakeawayLine } from "react-icons/ri";
import {useAuth} from "../../context/useAuth";

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [auth, setAuth] = useAuth();


  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="bg-primary py-2 mt-2 ">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center gap-2 sm:gap-3">
            <div className="lg:hidden">
              <HiOutlineBars3CenterLeft
                size={40}
                className="text-white cursor-pointer"
                onClick={handleToggleSidebar}
              />
            </div>

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
                    to="/books"
                  >
                    Books
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="/authors"
                  >
                    Authors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                    to="/publishers"
                  >
                    Publishers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                      to="/blogs"
                  >
                   Blogs
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
                    className="input input-bordered rounded-l outline-none h-9 sm:h-10 w-full sm:w-72 md:w-80 xl:w-96"
                  />
                  <button className="btn btn-square rounded-r h-9 sm:h-10 min-h-max">
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
            {!auth?.user ? (
                <ul className="menu menu-horizontal text-white text-lg">
                  <NavLink
                      className="p-0 pr-8 hover:bg-transparent hover:text-base-300"
                      to="/login"
                  >
                    Login
                  </NavLink>
                </ul>
            ) : (
            <div className="flex items-center">
              {/* <select className="select select-sm focus:outline-none font-light bg-transparent text-white">
                <option>Language</option>
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
              <select className="select select-sm focus:outline-none font-light bg-transparent text-white">
                <option>Currency</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>INR</option>
              </select> */}
              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0}>
                  <button className="btn btn-ghost btn-circle text-white">
                    <div className="indicator">
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
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                      <span className="badge badge-sm bg-base-200 border-base-200 indicator-item text-primary">
                        6
                      </span>
                    </div>
                  </button>
                </label>
                <div
                  tabIndex={0}
                  className="dropdown-content card p-0 card-compact w-64 sm:w-72 shadow-md bg-base-100 border"
                >
                  <div className="card-title p-4 pb-0 mb-0">
                    <h3 className="text-lg">Notifications</h3>
                  </div>
                  <div className="card-body bg-transparent shadow-none px-0">
                    <ul className="overflow-y-auto">
                      <li>
                        <Link to="" className="block px-4 py-3 border-t">
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-400 text-white w-10 h-10 flex-shrink-0 rounded-full flex justify-center items-center">
                              <BsEnvelope size={20} />
                            </div>
                            <div>
                              <h4
                                className="font-semibold text-gray-600 mb-1"
                                style={{ fontSize: "0.9rem" }}
                              >
                                See new books
                              </h4>
                              <p className="text-gray-500">2 days ago</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="block px-4 py-3 border-t">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-500 text-white w-10 h-10 flex-shrink-0 rounded-full flex justify-center items-center">
                              <BsCheck2Square size={20} />
                            </div>
                            <div>
                              <h4
                                className="font-semibold text-gray-600 mb-1"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Your ordered delivered successfully.
                              </h4>
                              <p className="text-gray-500">2 days ago</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="block px-4 py-3 border-t">
                          <div className="flex items-center gap-3">
                            <div className="bg-sky-400 text-white w-10 h-10 flex-shrink-0 rounded-full flex justify-center items-center">
                              <RiTakeawayLine size={22} />
                            </div>
                            <div>
                              <h4
                                className="font-semibold text-gray-600 mb-1"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Order in progress
                              </h4>
                              <p className="text-gray-500">2 days ago</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="" className="block px-4 py-3 border-t">
                          <div className="flex items-center gap-3">
                            <div className="bg-red-500 text-white w-10 h-10 flex-shrink-0 rounded-full flex justify-center items-center">
                              <MdOutlineDangerous size={24} />
                            </div>
                            <div>
                              <h4
                                className="font-semibold text-gray-600 mb-1"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Your order have been cancelled.
                              </h4>
                              <p className="text-gray-500">2 days ago</p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow-md border-2 rounded-box w-52"
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



                    <NavLink to="/user/my-order">My Order</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={logout} to="/">Logout</NavLink>

                  </li>
                </ul>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`sidebar fixed top-0 w-80 max-w-sm h-full bg-white shadow-2xl duration-300 lg:hidden z-[9999999] ${
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
