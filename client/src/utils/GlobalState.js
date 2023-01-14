import React, { createContext, useContext } from "react";
import { useNonProfitReducer } from './reducers'

const OrgContext = createContext();
const { Provider } = OrgContext;

const OrgProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useNonProfitReducer({
    cart: [],
    cartOpen: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useOrgContext = () => {
  return useContext(OrgContext);
};

export { OrgProvider, useOrgContext };