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
      <body className="bg-teal-50">
        <section>
        <div className=" container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 class="text-3xl font-bold tracking-wide text-cyan-800 dark:text-white lg:text-5xl">
                        Welcome Back! 
                    </h1>
                    
                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#498c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <span className="mx-2 text-cyan-700">Review your saved organizations.</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#498c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <span className="mx-2 text-cyan-700">Add the desired organization to your cart!</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#498c7b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <span className="mx-2 text-cyan-700">If you aren't quite ready to make a donation, don't worry! <br></br> This page isn't going anywhere!</span>
                        </p>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src={require("../assets/img/friends.png")}  alt="friendly photo of a group of children"></img>
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
                    className="mx-2 mb-8 w-72 focus:outline-none xl:mb-0"
                  >
                    <div>
                    <img
                      src={nonprofits.image}
                      alt = "non-Profit"
                      tabIndex="0"
                      className="h-44 w-full focus:outline-none"
                      >
                    </img>
                  </div>
                  <div className="bg-white dark:bg-gray-800">
                      <div className="flex items-center justify-between px-4 pt-4">
                        <div>
                          <img
                            className="max-w-sm rounded-lg bg-white shadow-lg"
                            src={nonprofits.logo}
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
      </body>
    )
};

    export default SavedOrgs;
