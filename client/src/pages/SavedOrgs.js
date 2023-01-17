import React from "react";
//use Query Hook
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Remove Non Profit mutation
import { REMOVE_NONPROFIT } from "../utils/mutations";

import Auth from "../utils/auth";
import { removeNonProfitId } from "../utils/localStorage";


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
    return (
<div tabindex="0" className="focus:outline-none">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            {userData.favorites?.map((nonprofits) => {
              return (
                <div
                  key={nonprofits.orgsId}
                  tabindex="0"
                  className="mx-2 mb-8 w-72 focus:outline-none xl:mb-0"
                >
                  <div className="bg-white dark:bg-gray-800">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <img
                          className="max-w-sm rounded-lg bg-white shadow-lg"
                          src={nonprofits.image}
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
                          {nonprofits.name}
                        </h2>
                      </div>
                      <p
                        tabindex="0"
                        className="mt-2 text-xs text-gray-600 focus:outline-none dark:text-gray-200"
                      >
                        {nonprofits.description}
                      </p>

                      <div className="flex items-center justify-between py-4">
                        <button
                          type="button"
                          className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        >
                          Donate List
                        </button>
                        <button
                          type="button"
                          className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                          onClick={() => handleDeleteNonProfit(nonprofits.orgsId)}
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
        </div>
      </div>
      
    )
};

    export default SavedOrgs;
