import React from "react";
// import Auth from "../../utils/auth"; for future

function NavBar() {
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-3xl font-medium">
                PhilanthroMe
            </h1>
            <div> 
                <button id="mobile-open-button" 
                className="text-3xl sm:hidden focus:outline-none">
                	&#9776;
                </button>
                <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                    <a href="#orgs" className="hover:opacity-90"> Organizations</a>
                    <a href="#testimonials" className="hover:opacity-90"> Our Story</a>
                    <a href="#contact" className="hover:opacity-90">Contact</a>
                    <a href="#login" className="hover:opacity-90">Log In</a>
                </nav>
            </div>
     </section>
    </header>
  );
}

export default NavBar;
