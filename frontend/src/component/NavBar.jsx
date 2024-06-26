import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../img/MU_Cafeteria.png";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import axios from "axios";
import { addToast } from "../redux/ToastSlice";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export default function NavBar() {
  const urlParams = new URLSearchParams(window.location.search);
  const [haveToken, setHaveToken] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { size } = useSelector((state) => state.cart);
  const token = Cookies.get("auth");
  useEffect(() => {
    if (token) {
      setHaveToken(true);
    }
    if (urlParams.size) {
      setTimeout(() => {
        dispatch(
          addToast({
            type: "",
            msg: "",
          })
        );
      }, 2000);
    }
  }, [0]);

  const [drawerActive, setDrawerActive] = useState({
    bottom: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (anchor === "bottom") setDrawerActive({ bottom: open });
    if (anchor === "left") setDrawerActive({ left: open });
  };

  const logOut = async () => {
    const token = Cookies.get("auth");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/login/logout`,
        {
          headers: {
            token: token,
          },
        }
      );
    } catch (error) {
      console.log(error.response);
      if (error.message === "Network Error")
        return console.error(error.message);
      console.log(error.response.data.message);
    }
    Cookies.remove("auth");
    Cookies.remove("id");
    window.location.replace("/?forget=true");
  };

  const SideBar = (
    <div>
      <li className="nav-link w-full flex justify-end  mt-4">
        <button
          className="btn btn-circle mr-3 btn-sm border-slate-100 bg-transparent "
          onClick={toggleDrawer("left", false)}
        >
          <CloseIcon className="!font-bold" sx={{ fontSize: 16 }} />
        </button>
      </li>
      <ul className="cursor-pointer navbar-ul main-nav  pr-2 pl-5 ">
        <NavLink to="/" onClick={toggleDrawer("left", false)}>
          <li className="nav-link my-5 !pr-16">Home</li>
        </NavLink>

        <NavLink to="news" onClick={toggleDrawer("left", false)}>
          <li className="nav-link my-5 !pr-16">News</li>
        </NavLink>

        <NavLink to="contactus" onClick={toggleDrawer("left", false)}>
          <li className="nav-link my-5 !pr-16">Contact Us</li>
        </NavLink>
        <li
          className="nav-link my-5 !pr-16"
          onClick={toggleDrawer("bottom", true)}
        >
          <span>Cart</span>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="bg-white border-gray-200 dark:bg-slate-800 shadow-md lg:px-10">
      <div className="container">
        <nav className="navbar ">
          <div className="navbar-start">
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={toggleDrawer("left", true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <a
              href="/"
              className="lg:flex items-center space-x-3 rtl:space-x-reverse hidden"
            >
              <img src={logo} className="h-12" alt="Flowbite Logo" />
              <span className="self-center font-serif text-2xl font-semibold whitespace-nowrap dark:text-slate-50">
                MU_Cafeteria
              </span>
            </a>
          </div>

          <a
            href="/"
            className="max-lg:flex items-center space-x-3 rtl:space-x-reverse hidden"
          >
            <img src={logo} className="h-9 max-sm:h-12 w-24" alt="logo" />
            <span className="self-center  max-sm:hidden  text-2xl font-semibold whitespace-nowrap dark:text-slate-50 font-serif">
              MU_Cafeteria
            </span>
          </a>
          <div className="w-full justify-center lg:flex hidden">
            <ul className="flex cursor-pointer navbar-ul main-nav">
              <NavLink to="/">
                <li className="nav-link">Home</li>
              </NavLink>

              <NavLink to="news">
                <li className="nav-link">News</li>
              </NavLink>

              <NavLink to="contactus">
                <li className="nav-link">Contact Us</li>
              </NavLink>
            </ul>
          </div>

          <div className="navbar-end">
            <button
              onClick={toggleDrawer("bottom", true)}
              className="btn btn-circle btn-md mr-5 text-slate-700 hidden lg:block"
            >
              <div className="indicator">
                <LocalMallOutlinedIcon />
                {Boolean(size) && (
                  <span className="badge badge-xs text-red-700 indicator-item ">
                    {size}
                  </span>
                )}
              </div>
            </button>
            {!haveToken && (
              <a
                href="/login"
                className="btn min-h-full  h-full rounded-full hover:bg-slate-600 hover:text-slate-100 border-slate-600 bg-transparent text-slate-600 py-3 px-6"
              >
                <span className="max-sm:hidden">Login/Registration</span>
                <span className="hidden max-sm:block">Login</span>
              </a>
            )}
            {haveToken && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user &&
                        `http://localhost:5000/avatar/${
                          user.avatar ? user.avatar : "default-avatar.png"
                        } `
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 border border-slate-100 p-2 shadow-[-5px_4px_31px_-12px] menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-[13]"
                >
                  <li>
                    <NavLink to="profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="changepwd">Change Password</NavLink>
                  </li>
                  <li>
                    <span
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <Drawer
          anchor={"bottom"}
          open={drawerActive["bottom"]}
          onClose={toggleDrawer("bottom", false)}
        >
          <CheckOut closeBtn={toggleDrawer("bottom", false)} />
        </Drawer>
        <Drawer
          anchor={"left"}
          open={drawerActive["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {SideBar}
        </Drawer>
      </div>
    </div>
  );
}
