import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchOrgs from "./pages/SearchOrgs";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import SavedOrgs from "./pages/SavedOrgs";
import Cart from "./pages/Cart";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  //console.log('Rendering Route');
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <NavBar />
          <Routes>
          {/*console.log('Route configuration:', LogIn, SignUp, SearchOrgs, SavedOrgs)*/}
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SearchOrgs" element={<SearchOrgs />} />
            <Route path="/SavedOrgs" element={<SavedOrgs />} />
            <Route path="/Story" element={<Story />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<h1 className="display-2">Page Not Found!</h1>}/>
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
