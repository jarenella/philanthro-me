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
  
  const handleDeleteNonProfit = async (nonProfitId) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeNonProfit({
        variables: { nonProfitId },
      });

      removeNonProfitId(nonProfitId);
    } catch (err) {
        console.error(err);
      }
    };
    return (
        <div>
        {userData.favorites?.map((nonprofit) => {
          return (
            <div key={nonprofit.orgsId} className="flex justify-center">
              <div className="max-w-sm rounded-lg bg-white shadow-lg">
                <img
                  className="rounded-t-lg"
                  src={nonprofit.image}
                  alt=""
                ></img>

                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium text-gray-900">
                    {nonprofit.names}
                  </h5>
                  <p className="mb-4 text-base text-gray-700">
                    {nonprofit.description}
                  </p>
                   <button
                    type="button"
                    className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Donate List
                  </button>
                  <button
                    type="button"
                    className=" inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    onClick={() => handleDeleteNonProfit(nonprofit.nonProfitId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    )
};

    export default SavedOrgs;
