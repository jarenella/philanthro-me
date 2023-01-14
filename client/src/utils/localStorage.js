// Get saved non-profits
export const getSavedNonProfitsIds = () => {
  const savedNonProfitsIds = localStorage.getItem('saved_nonProfits')
    ? JSON.parse(localStorage.getItem('saved_nonProfits'))
    : [];

  return savedNonProfitsIds;
};


// Save non-profits
export const saveNonProfitsIds = (nonProfitIdArr) => {
  if (nonProfitIdArr.length) {
    localStorage.setItem('saved_nonProfits', JSON.stringify(nonProfitIdArr));
  } else {
    localStorage.removeItem('saved_nonProfits');
  }
};

//Remove non-profits
export const removeNonProfitId = (nonProfitId) => {
  const savedNonProfitsIds = localStorage.getItem('saved_nonProfits')
    ? JSON.parse(localStorage.getItem('saved_nonProfits'))
    : null;

  if (!savedNonProfitsIds) {
    return false;
  }

  const updatedSavedNonProfitsIds = savedNonProfitsIds?.filter((savedNonProfitsId) => savedNonProfitsId !== nonProfitId);
  localStorage.setItem('saved_nonProfits', JSON.stringify(updatedSavedNonProfitsIds));

  return true;
};
