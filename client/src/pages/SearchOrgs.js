import React, { useState, useEffect } from "react";
//Include icons with material tailwind
import { IconButton } from "@material-tailwind/react";

//Authorize only logged in Users
import Auth from "../utils/auth";

// Apollo useMutation() Hook
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_NONPROFIT } from "../utils/mutations";

//***User's favorites non-profits***/
import {
  saveNonProfitsIds,
  getSavedNonProfitsIds,
} from "../utils/localStorage";

import { QUERY_USER } from "../utils/queries";

//***Cart***/
import { ADD_NONPROFIT } from "../utils/mutations";
import { addNonProfitsIds, getAddedNonProfitsIds } from "../utils/localStorage";

const API_KEY = process.env.REACT_APP_API_KEY;

console.log(API_KEY)

const SearchOrgs = () => {
  // create state for holding returned google api data
  const [searchedOrgs, setSearchedOrgs] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  //PROFILE//
  //saved Org values
  const [savedNonProfitIds, setSavedNonProfitIds] = useState(
    getSavedNonProfitsIds()
  );

  //saveNonProfit mutation - add non-Profit to user's profile
  const [saveNonProfit, { error }] = useMutation(SAVE_NONPROFIT);

  // useEffect to save nonProfits Ids list to local Storage
  useEffect(() => {
    return () => saveNonProfitsIds(savedNonProfitIds);
  });

  //CART//

  //added non-profit values - Cart
  const [addedNonProfitIds, setAddedNonProfitIds] = useState(
    getAddedNonProfitsIds()
  );

  //addNonProfit mutation - to add non-Profit to Cart
  const [addNonProfit, { err }] = useMutation(ADD_NONPROFIT);

  const { data } = useQuery(QUERY_USER);

      

  // useEffect to save nonProfits Ids list to local Storage
  useEffect(() => {
    return () => addNonProfitsIds(addedNonProfitIds);
  });

  // create method to search for nonProfits and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://partners.every.org/v0.2/search/${searchInput}?take=20&apiKey=${API_KEY}`
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { nonprofits } = await response.json();

      console.log(nonprofits);

      const userData = data?.user || {};

      const orgsData = nonprofits.map((nonprofits) => ({
        orgsId: nonprofits.ein,
        name: nonprofits.name,
        description: nonprofits.description,
        image: nonprofits.coverImageUrl,
        logo: nonprofits.logoUrl,
        donationLink: `https://www.every.org/${nonprofits.slug}?`

        //logo:  nonprofits.logoUrl
      }));

      console.log(orgsData);

      setSearchedOrgs(orgsData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // PROFILE PAGE - create function to handle saving a non-profit to our database
  const handleSaveNonProfit = async (orgsId) => {
    const nonProfitToSave = searchedOrgs.find(
      (nonprofits) => nonprofits.orgsId === orgsId
    );
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(nonProfitToSave);
    if (!token) {
      return false;
    }

    try {
      const { data } = await saveNonProfit({
        variables: { nonProfitData: { ...nonProfitToSave } },
      });
      console.log(savedNonProfitIds);
      // if nonProfit successfully saves to user's account, save nonProfit id to state
      setSavedNonProfitIds([...savedNonProfitIds, nonProfitToSave.orgsId]);
    } catch (err) {
      console.error(err);
    }
  };

  // CART - create function to handle adding a non-profit to our database -
  const handleAddNonProfit = async (orgsId) => {
    const nonProfitToAdd = searchedOrgs.find(
      (nonprofits) => nonprofits.orgsId === orgsId
    );
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(nonProfitToAdd);
    if (!token) {
      return false;
    }

    try {
      const { data } = await addNonProfit({
        variables: { nonProfitData: { ...nonProfitToAdd } },
      });
      console.log(addedNonProfitIds);
      // if nonProfit successfully saves to user's account, save nonProfit id to state
      setAddedNonProfitIds([...addedNonProfitIds, nonProfitToAdd.orgsId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <body className="bg-gradient-to-r from-green-100 to-teal-50 dark:bg-gray-900">
    <section>
        <div className=" container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2 dark:bg-gray-900">
                <div className="lg:max-w-lg">
                    <h1 class="text-3xl font-bold tracking-wide text-cyan-800 dark:text-white lg:text-5xl">
                        The Search Begins!
                    </h1>
                    
                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#498c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span className="mx-2 text-cyan-700">Enter a keyword related to your desired charity/non-profit.</span>
                        </p>

                  <p className="-mx-2 flex items-center text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#498c7b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="mx-2 text-cyan-700">
                      The application will display a number of organizations
                      relating to the user input.
                    </span>
                  </p>

                  <p className="-mx-2 flex items-center text-gray-700 dark:text-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#498c7b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="mx-2 text-cyan-700">
                      Add your preferred organizations to your cart or save them
                      for later!
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
              <img
                className="mx-auto h-full w-full rounded-md object-cover lg:max-w-2xl"
                src={require("../assets/img/donate.png")}
                alt="group"
              ></img>
            </div>
          </div>
        </section>
        <div>
          <div className="md:w-1/3">
            <label className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right">
              Search Non-Profit
            </label>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                All Categories{" "}
                <svg
                  aria-hidden="true"
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style={{position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate3d(897px, 5637px, 0px)"}}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Food Banks
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Education
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mental Health
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Environment
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                  placeholder="Search Food, Dog, Women, Homeless"
                  required
                ></input>
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-center">
          <h2>
            {searchedOrgs.length
              ? `Viewing ${searchedOrgs.length} results:`
              : "Search for an org to begin"}
          </h2>
        </div>

      <div tabIndex="0" className="focus:outline-none">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            {searchedOrgs.map((nonprofits) => {
              return (
                <div
                  key={nonprofits.orgsId}
                  tabIndex="0"
                  className="mx-2 mb-8 w-72 focus:outline-none xl:mb-0 shadow hover:shadow-lg rounded-lg shadow-rounded transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <div>
                    <a href = {nonprofits.donationLink} target = "_blank" rel="noreferrer">
                      <img
                      src={nonprofits.image}
                      alt = "non-Profit"
                      tabIndex="0"
                      className="h-44 w-full focus:outline-none rounded-md"
                      >
                    </img>
                    </a>
                  </div>
                  <div className="bg-white dark:bg-gray-800 shadow hover:shadow-lg rounded-lg shadow-rounded">
                    <div className="flex items-center justify-between px-4 pt-4 rounded-lg">
                      <div>
                      <a href = {nonprofits.donationLink} target = "_blank" rel="noreferrer">
                        <img
                          className="max-w-sm rounded-lg bg-white shadow-lg dark:bg-grey-400"
                          src={nonprofits.logo}
                          alt="bookmark"
                        >
                        </img>
                        </a>
                      </div>
                      <div className="rounded-full bg-yellow-200 py-1.5 px-6">
                        <p
                          tabIndex="0"
                          className="text-xs text-yellow-700 focus:outline-none"
                        >
                          Featured
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2
                          tabIndex="0"
                          className="text-lg font-semibold focus:outline-none dark:text-white"
                        >
                          {nonprofits.name.substring(0, 26)}
                        </h2>
                      </div>
                      <p
                        tabindex="0"
                        className="mt-2 text-xs text-gray-600 focus:outline-none dark:text-gray-200"
                      >
                        {nonprofits.description.substring(0, 150)}
                      </p>

                        <div className="flex items-center justify-between py-4">
                          <IconButton>
                            <i className="fas fa-heart" />
                          </IconButton>
                          {Auth.loggedIn() && (
                            <button
                              disabled={savedNonProfitIds?.some(
                                (savedNonProfitId) =>
                                  savedNonProfitId === nonprofits.orgsId
                              )}
                              type="button"
                              onClick={() =>
                                handleSaveNonProfit(nonprofits.orgsId)
                              }
                              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              {savedNonProfitIds?.some(
                                (savedNonProfitId) =>
                                  savedNonProfitId === nonprofits.orgsId
                              )
                                ? "Saved!"
                                : "Save"}
                            </button>
                          )}
                          {Auth.loggedIn() && (
                          <button
                            type="button"
                            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={() =>
                              handleAddNonProfit(nonprofits.orgsId)
                            }
                            disabled={addedNonProfitIds?.some(
                              (addedNonProfitId) => addedNonProfitId === nonprofits.orgsId
                              )}
                              >
                              {addedNonProfitIds?.some(
                                (addedNonProfitId) => addedNonProfitId === nonprofits.orgsId
                              )
                                ? "Added!"
                                : "Donate"}

                          </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default SearchOrgs;
