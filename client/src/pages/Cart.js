import React, { useState } from "react";

//use Query Hook
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

// Delete Non Profit mutation
import { DELETE_NONPROFIT } from "../utils/mutations";

import Auth from "../utils/auth";
import { deleteNonProfitId } from "../utils/localStorage";

const CartOrgs = () => {
  const { data } = useQuery(QUERY_USER);
  const [deleteNonProfit, { error }] = useMutation(DELETE_NONPROFIT);
  const userData = data?.user || {};

  const [ subTotal, setSubtotal ] = useState(0); //for rendering and saving the info of the purchase total when the amount given to one NPO is changed
  // FOR FUTURE --> this regex matches that the user input is in currency format /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test(5.49) (returns true)
  //Get individual orgs amount value: const [inputValue, setInputValue] = useState("");

  const handleAmountChange = () => {
    //function that handles when the user changes the amount they are donating to any given non profit in their cart
    const nonProfitsInCart = document.getElementsByClassName("amounts"); //array of all the non profits in the cart's monetary value
    let total = 0;
    for (let i = 0; i < nonProfitsInCart.length; i++) {
      //loop through the amounts for as many as there are and add each amount to the total
      let currentValue = nonProfitsInCart[i].value;
      let currentValueInt = 0;
      if (currentValue === "") {
        //if the current amount the user has put in is empty, it's returned to us as an empty string
        currentValueInt = 0;
      } else {
        currentValueInt = parseFloat(nonProfitsInCart[i].value);
      }
      total = total + currentValueInt;
    }

    setSubtotal(total);
  };

  // create function that accepts the nonprofit mongo _id value as param and deletes the nonProfit from the database

  const handleDeleteNonProfit = async (orgsId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deleteNonProfit({
        variables: { orgsId },
      });

      deleteNonProfitId(orgsId);
    } catch (err) {
      console.error(err);
    }
  };
  const print = () => {
    window.print();
  }
  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-gray-900 dark:text-white">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
                      id="slide-over-title"
                    >
                      Donation cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <a href="/">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Close panel</span>

                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {userData.donation?.map((nonprofits) => {
                          return (
                            <li key={nonprofits.orgsId} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <a
                                  href={`${nonprofits.donationLink}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={nonprofits.logo}
                                    alt="logo"
                                    className="h-full w-full object-cover object-center"
                                  ></img>
                                </a>
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                    <h3>
                                      <a href={nonprofits.donationLink}>
                                        {nonprofits.name}
                                      </a>
                                    </h3>
                                  </div>
                                  <div>
                                    <label
                                      for="hs-input-with-leading-and-trailing-icon"
                                      className="mb-2 block text-sm font-medium dark:text-white"
                                    >
                                      Donation Amount
                                    </label>
                                    <div className="relative">
                                      <input //going to add an on change watcher to this input to re-render the total everytime the amount is changed (total will be saved in the state)
                                        type="text"
                                        id="hs-input-with-leading-and-trailing-icon"
                                        name="hs-input-with-leading-and-trailing-icon"
                                        className="amounts block w-full rounded-md border-gray-200 py-3 px-4 pl-9 pr-16 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                                        placeholder="0.00"
                                        onChange={handleAmountChange}
                                      ></input>
                                      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4">
                                        <span className="text-gray-500">$</span>
                                      </div>
                                      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center pr-4">
                                        <span className="text-gray-500">
                                          USD
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleDeleteNonProfit(nonprofits.orgsId)
                                      }
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                                <a
                                  href={`${nonprofits.donationLink}amount=${subTotal}&frequency=ONCE&email=${userData.email}&first_name=${userData.name}&description= This donation is on behalf of ${userData.name}, user from PhilanthroMe app#donate`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                  Donate
                                </a>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                  </div>
                  <div className="mt-6">
                    <button
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      onClick={() =>
                        print()
                      }
                    >
                      Donation List 
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <br></br>
                      <a href = "/SearchOrgs">
                      <button
                        type="button"
                        className="font-big text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Browsing Non-Profits
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOrgs;
