import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useState } from "react"; // import state

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  if (Auth.loggedIn()) {
    return (
      <nav className="sticky top-0 z-10 w-full bg-teal-700 text-white shadow">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5 lg:block lg:py-5">
              <div>
                <a href="/">
                  <img
                    src={require("./faviconWhite.ico")}
                    className="w-14 md:hidden"
                    alt="icon"
                  ></img>
                </a>
              </div>
              <a href="/">
                <h2 className="text-3xl font-medium font-bold text-white ">
                  PhilanthroMe
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 text-xl md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/SearchOrgs">
                    {" "}
                    Search
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/Story">
                    {" "}
                    Story
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/SavedOrgs">
                    Favorites
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/Cart">
                    Cart
                  </Link>
                </li>
                <div>
                  <a href="/">
                    <img
                      src={require("./faviconWhite.ico")}
                      className="w-12"
                      alt="icon"
                    ></img>
                  </a>
                </div>
              </ul>
              <div className="mt-3 space-y-2 md:inline-block md:hidden">
                <Link
                  className="inline-block w-full rounded-md bg-gray-600 px-4 py-2 text-center text-white shadow hover:bg-gray-800"
                  onClick={Auth.logout}
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 lg:inline-block">
            <Link
              className="rounded-md bg-gray-600 px-4 py-2 text-white shadow hover:bg-gray-800"
              onClick={Auth.logout}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="sticky top-0 z-10 w-full bg-teal-700 text-white shadow">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              <div>
                <a href="/">
                  <img
                    src={require("./faviconWhite.ico")}
                    className="w-14 md:hidden"
                    alt="icon"
                  ></img>
                </a>
              </div>
              <a href="/">
                <h2 className="text-3xl font-medium font-bold text-white">
                  PhilanthroMe
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 text-xl md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/SearchOrgs">
                    Search
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/Story">
                    {" "}
                    Story
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/Contact">
                    Contact
                  </Link>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <Link className="hover:opacity-90" to="/Cart">
                    Cart
                  </Link>
                </li>
                <div>
                  <a href="/">
                    <img
                      src={require("./faviconWhite.ico")}
                      className="w-12"
                      alt="icon"
                    ></img>
                  </a>
                </div>
              </ul>
              <div className="mt-3 space-y-2 md:inline-block md:hidden">
                <Link
                  className="inline-block w-full rounded-md bg-gray-600 px-4 py-2 text-center text-white shadow hover:bg-gray-800"
                  to="/LogIn"
                >
                  Log In
                </Link>
                <Link
                  className="inline-block w-full rounded-md bg-white px-4 py-2 text-center text-gray-800 shadow hover:bg-gray-100"
                  to="/SignUp"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 lg:inline-block">
            <Link
              className="rounded-md bg-gray-600 px-4 py-2 text-white shadow hover:bg-gray-800"
              to="/LogIn"
            >
              Sign In
            </Link>
            <Link
              className="rounded-md bg-white px-4 py-2 text-gray-800 shadow hover:bg-gray-100"
              to="/SignUp"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
