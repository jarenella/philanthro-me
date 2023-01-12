import React, { useState } from "react";

const SearchOrgs = () => {
    // create state for holding returned google api data
    const [searchedOrgs, setSearchedOrgs] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState("");
  
    // create method to search for books and set state on form submit
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
          orgsId: nonprofits.id,
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

   return (
    <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Search Non-Profit
                </label>
            </div>
            <div className="md:w-2/3">
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name" type="text" value="Key word Search"></input>
            </div>
        </div>       
        <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
                <button
                    className="shadow bg-teal-700 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button">
                    Search
                </button>
            </div>
        </div>
    </form>
   //nonprofits.id
   //nonprofits.name
   //nonprofits.description
   //nonprofits.image
        
   );
   };

    export default SearchOrgs;