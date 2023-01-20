// import React from "react";
// import Auth from "../utils/auth";

// import { ADD_NONPROFIT } from "../utils/mutations";
// import { addNonProfitsIds, getAddedNonProfitsIds } from "../utils/localStorage";

// const handleAddNonProfit = async (orgsId) => {
//     const nonProfitToAdd = searchedOrgs.find(
//       (nonprofits) => nonprofits.orgsId === orgsId
//     );
//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;
//     console.log(nonProfitToAdd);
//     if (!token) {
//       return false;
//     }

//     try {
//       const { data } = await addNonProfit({
//         variables: { nonProfitData: { ...nonProfitToAdd } },
//       });
//       console.log(addedNonProfitIds);
//       // if nonProfit successfully saves to user's account, save nonProfit id to state
//       setAddedNonProfitIds([...addedNonProfitIds, nonProfitToAdd.orgsId]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

// export default handleAddNonProfit;