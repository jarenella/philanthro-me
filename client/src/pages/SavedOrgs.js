import React, { useState, useEffect } from "react";
//use Query Hook
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Remove Non Profit mutation
import { REMOVE_NONPROFIT } from "../utils/mutations";
import Auth from "../utils/auth";
import { removeNonProfitId } from "../utils/localStorage";
// Cart functionality
import { ADD_NONPROFIT } from "../utils/mutations";
import {
  addNonProfitsIds,
  getAddedNonProfitsIds,
} from "../utils/localStorage";

const SavedOrgs = () => {
  const { data } = useQuery(QUERY_USER);
  const [removeNonProfit, { error }] = useMutation(REMOVE_NONPROFIT);
  const userData = data?.user || {};

  // create function that accepts the nonprofit mongo _id value as param and deletes the nonProfit from the database

  const handleDeleteNonProfit = async (orgsId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeNonProfit({
        variables: { orgsId },
      });

      removeNonProfitId(orgsId);
    } catch (err) {
      console.error(err);
    }
  };
  const [addedNonProfitIds, setAddedNonProfitIds] = useState(
    getAddedNonProfitsIds()
  );

  // Function to delete all non-prfits from favorite's page
  const handleDeleteAllNonProfits = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    const savedNonProfits = JSON.parse(
      localStorage.getItem("saved_nonProfits")
    );

    try {
      await Promise.all(
        savedNonProfits.map(async (orgsId) => {
          const { data } = await removeNonProfit({
            variables: { orgsId },
          });
          removeNonProfitId(orgsId);
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  //addNonProfit mutation - to add non-Profit to Cart
  const [addNonProfit, { err }] = useMutation(ADD_NONPROFIT);

  // useEffect to save nonProfits Ids list to local Storage
  useEffect(() => {
    return () => addNonProfitsIds(addedNonProfitIds);
  });
  // CART - create function to handle adding a non-profit to our database -
  const handleAddNonProfit = async (orgsId) => {
    console.log(orgsId);
    const nonProfitToAdd = userData.favorites.find(
      (nonprofits) => nonprofits.orgsId === orgsId
    );
    console.log(nonProfitToAdd);
    const updatedNonProfit = { ...nonProfitToAdd };
    delete updatedNonProfit.__typename;
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const { data } = await addNonProfit({
        variables: { nonProfitData: { ...updatedNonProfit } },
      });
      console.log(addedNonProfitIds);
      // if nonProfit successfully saves to user's account, save nonProfit id to state
      setAddedNonProfitIds([...addedNonProfitIds, nonProfitToAdd.orgsId]);
    } catch (err) {
      console.error("Error Will Robinson", err);
    }
  };
  return (
    <div className="bg-teal-50 dark:bg-gray-900">
      <section>
        <div className=" container mx-auto flex flex-col space-y-6 px-6 py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-cyan-800 dark:text-white lg:text-5xl">
                Welcome Back {userData.name}!
              </h1>

              <div className="mt-8 space-y-5">
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="mx-2 text-cyan-700">
                    Review your saved organizations.
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="mx-2 text-cyan-700">
                    Add the desired organization to your cart!
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="mx-2 text-cyan-700">
                    If you aren't quite ready to make a donation, don't worry!{" "}
                    <br></br> This page isn't going anywhere!
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-96 w-full items-center justify-center lg:w-1/2">
            <img
              className="mx-auto h-full w-full rounded-md object-cover lg:max-w-2xl"
              src={require("../assets/img/friends.png")}
              alt="friendly group of people"
            ></img>
          </div>
        </div>
      </section>
      <div tabindex="0" className="focus:outline-none">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            {userData.favorites?.map((nonprofits) => {
              return (
                <div
                  key={nonprofits.orgsId}
                  tabindex="0"
                  className="shadow-rounded mx-2 mb-8 w-72 transform rounded-lg shadow transition hover:-translate-y-1 hover:shadow-lg focus:outline-none motion-reduce:transition-none motion-reduce:hover:transform-none xl:mb-0"
                >
                  <div>
                    <a
                      href={nonprofits.donationLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={nonprofits.image}
                        alt="non-Profit"
                        tabIndex="0"
                        className="h-44 w-full rounded-md focus:outline-none"
                      ></img>
                    </a>
                  </div>
                  <div className="shadow-rounded rounded-lg bg-white shadow hover:shadow-lg dark:bg-gray-900">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <a
                          href={nonprofits.donationLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="max-w-sm rounded-lg bg-white shadow-lg"
                            src={nonprofits.logo}
                            alt="bookmark"
                          ></img>
                        </a>
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
                        <button
                          type="button"
                          className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                          onClick={() => handleAddNonProfit(nonprofits.orgsId)}
                          disabled={addedNonProfitIds?.some(
                            (addedNonProfitId) =>
                              addedNonProfitId === nonprofits.orgsId
                          )}
                        >
                          {addedNonProfitIds?.some(
                            (addedNonProfitId) =>
                              addedNonProfitId === nonprofits.orgsId
                          )
                            ? "Added!"
                            : "Donate"}
                        </button>
                        <button
                          type="button"
                          className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                          onClick={() =>
                            handleDeleteNonProfit(nonprofits.orgsId)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="flex justify-end p-2 text-right"
            onClick={handleDeleteAllNonProfits}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedOrgs;
