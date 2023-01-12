import React from "react";
// import Auth from "../../utils/auth"; for future

function NavBar() {
  return (
    <header className="flex-row px-1">
      <h1>Project Name</h1>
      <button>My Cart</button>
      <button>Sell</button>
      <button>Log In</button>
    </header>
  );
}

export default NavBar;
