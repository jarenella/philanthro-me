import React from "react";
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth"; 

function NavBar() {
  if (Auth.loggedIn()) {
    return (
      <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            
              <Link className="text-3xl font-medium" to="/">
                PhilanthroMe
              </Link>
           
            <div> 
                <button id="mobile-open-button" 
                className="text-3xl sm:hidden focus:outline-none">
                	&#9776;
                </button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                    <Link className="hover:opacity-90" to="/SearchOrgs"> Organizations</Link>
                    <Link className="hover:opacity-90" to="/Story"> Our Story</Link>
                    <Link className="hover:opacity-90" to="/Contact">Contact</Link>
                    <Link className="hover:opacity-90" onClick={Auth.logout}>Logout</Link>
                    <Link className="hover:opacity-90" to = "/SavedOrgs">Saved Orgs</Link>
                    <Link className="hover:opacity-90" to = "/Cart">Cart</Link>
                    </nav>
            </div>
     </section>
    </header>
    );
  } else {

   return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
              <Link className="text-3xl font-medium" to="/">
                PhilanthroMe
              </Link>
            <div> 
                <button id="mobile-open-button" 
                className="text-3xl sm:hidden focus:outline-none">
                	&#9776;
                </button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                    <Link className="hover:opacity-90" to="/SearchOrgs"> Organizations</Link>
                    <Link className="hover:opacity-90" to="/Story"> Our Story</Link>
                    <Link className="hover:opacity-90" to="/Contact">Contact</Link>
                    <Link className="hover:opacity-90" to="/LogIn">Log In</Link>
                    <Link className="hover:opacity-90" to="/SignUp">Sign Up</Link>
                </nav>
            </div>
     </section>
    </header>
  );
};
}

export default NavBar;
