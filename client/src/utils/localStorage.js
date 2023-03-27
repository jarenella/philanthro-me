//****PROFILE PAGE - local-storage set-up - saved_nonProfits array****

// Get saved non-profits
export const getSavedNonProfitsIds = () => {
  const savedNonProfitsIds = localStorage.getItem("saved_nonProfits")
    ? JSON.parse(localStorage.getItem("saved_nonProfits"))
    : [];

  return savedNonProfitsIds;
};

// Save non-profits
export const saveNonProfitsIds = (nonProfitIdArr) => {
  if (nonProfitIdArr.length) {
    localStorage.setItem("saved_nonProfits", JSON.stringify(nonProfitIdArr));
  } else {
    localStorage.removeItem("saved_nonProfits");
  }
};

//Remove non-profits
export const removeNonProfitId = (orgsId) => {
  const savedNonProfitsIds = localStorage.getItem("saved_nonProfits")
    ? JSON.parse(localStorage.getItem("saved_nonProfits"))
    : null;

  if (!savedNonProfitsIds) {
    return false;
  }

  //User's profile - favorite non-profits array
  const updatedSavedNonProfitsIds = savedNonProfitsIds?.filter(
    (savedNonProfitsId) => savedNonProfitsId !== orgsId
  );
  localStorage.setItem(
    "saved_nonProfits",
    JSON.stringify(updatedSavedNonProfitsIds)
  );

  return true;
};

//****CART - Local storage set-up - added_nonProfits array*****

// Get added non-profits from the local storage cart's array: added_nonProfits
export const getAddedNonProfitsIds = () => {
  const addedNonProfitsIds = localStorage.getItem("added_nonProfits")
    ? JSON.parse(localStorage.getItem("added_nonProfits"))
    : [];

  return addedNonProfitsIds;
};

// Save non-profits to the local storage cart's array
export const addNonProfitsIds = (nonProfitIdArr) => {
  if (nonProfitIdArr.length) {
    localStorage.setItem("added_nonProfits", JSON.stringify(nonProfitIdArr));
  } else {
    localStorage.removeItem("added_nonProfits");
  }
};

//Delete non-profits from the local storage cart's array
export const deleteNonProfitId = (orgsId) => {
  const addedNonProfitsIds = localStorage.getItem("added_nonProfits")
    ? JSON.parse(localStorage.getItem("added_nonProfits"))
    : null;

  if (!addedNonProfitsIds) {
    return false;
  }

  //CART's array
  const updatedAddedNonProfitsIds = addedNonProfitsIds?.filter(
    (addedNonProfitsId) => addedNonProfitsId !== orgsId
  );
  localStorage.setItem(
    "added_nonProfits",
    JSON.stringify(updatedAddedNonProfitsIds)
  );

  return true;
};

//Donation amount saved to local storage
export const saveDonationAmount = (donationAmount) => {
  localStorage.setItem("donationAmount", JSON.stringify(donationAmount));
};

// Get donation amount input
export const savedDonationAmount = JSON.parse(
  localStorage.getItem("donationAmount")
);

// Save sub-total to local storage
export const savedSubtotal = JSON.parse( 
  localStorage.getItem("subtotal")
);