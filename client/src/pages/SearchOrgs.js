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
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <p class="text-gray-700 text-base"></p>
  </div>
   //nonprofits.id
   //nonprofits.name
   //nonprofits.description
   //nonprofits.image
        
   );
   };

    export default SearchOrgs;