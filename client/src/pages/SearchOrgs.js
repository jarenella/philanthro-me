import React, { useState, useEffect } from "react";
//Include icons with material tailwind
import { IconButton } from "@material-tailwind/react";

//Authorize only logged in Users
import Auth from "../utils/auth";

// Apollo useMutation() Hook
import { useMutation } from "@apollo/client";
import { SAVE_NONPROFIT } from "../utils/mutations";
import {
  saveNonProfitsIds,
  getSavedNonProfitsIds,
} from "../utils/localStorage";

const SearchOrgs = () => {
  // create state for holding returned google api data
  const [searchedOrgs, setSearchedOrgs] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  //saved Org values
  const [savedNonProfitIds, setSavedNonProfitIds] = useState(
    getSavedNonProfitsIds()
  );

  //saveNonProfit mutation
  const [saveNonProfit, { error }] = useMutation(SAVE_NONPROFIT);

  // useEffect to save nonProfits Ids list to local Storage
  useEffect(() => {
    return () => saveNonProfitsIds(savedNonProfitIds);
  });

  // create method to search for nonProfits and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://partners.every.org/v0.2/search/${searchInput}?apiKey=aff405eca8c6c3b65de5c821a36553f7`
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { nonprofits } = await response.json();

      console.log(nonprofits);

      const orgsData = nonprofits.map((nonprofits) => ({
        orgsId: nonprofits.ein,
        names: nonprofits.name,
        description: nonprofits.description,
        image: nonprofits.logoUrl,
      }));

      console.log(orgsData);

      setSearchedOrgs(orgsData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveNonProfit = async (orgsId) => {
    const nonProfitToSave = searchedOrgs.find(
      (nonprofits) => nonprofits.orgsId === orgsId
    );
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveNonProfit({
        variables: { nonProfitData: { ...nonProfitToSave } },
      });
      console.log(savedNonProfitIds);
      // if nonProfit successfully saves to user's account, save nonProfit id to state
      setSavedNonProfitIds([...savedNonProfitIds, nonProfitToSave.nonProfitId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div className="md:w-1/3">
          <label className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right">
            Search Non-Profit
          </label>
        </div>
        <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-2/3">
              <input
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                id="inline-full-name"
                type="text"
                placeholder="Key word Search"
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="focus:shadow-outline rounded bg-teal-700 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
                type="button"
              >
                Search
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

      <div tabindex="0" className="focus:outline-none">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            {searchedOrgs.map((nonprofit) => {
              return (
                <div
                  key={nonprofit.orgsId}
                  tabindex="0"
                  className="mx-2 mb-8 w-72 focus:outline-none xl:mb-0"
                >
                  <div className="bg-white dark:bg-gray-800">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <img
                          className="max-w-sm rounded-lg bg-white shadow-lg"
                          src= {nonprofit.image}
                          alt="bookmark"
                        />
                      </div>
                      <div className="rounded-full bg-yellow-200 py-1.5 px-6">
                        <p
                          tabindex="0"
                          className="text-xs text-yellow-700 focus:outline-none"
                        >
                          Featured
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2
                          tabindex="0"
                          className="text-lg font-semibold focus:outline-none dark:text-white"
                        >
                           {nonprofit.names}
                        </h2>
                             </div>
                      <p
                        tabindex="0"
                        class="mt-2 text-xs text-gray-600 focus:outline-none dark:text-gray-200"
                      >
                        {nonprofit.description}
                      </p>

                      <div class="flex items-center justify-between py-4">
                      <IconButton>
                      <i className="fas fa-heart" />
                       </IconButton>
                      <button
                    type="button"
                    onClick={() => handleSaveNonProfit(nonprofit.orgsId)}
                    className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Donate List
                  </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchOrgs;
