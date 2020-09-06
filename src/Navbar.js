import React from "react";
import { Link } from "react-router-dom";

const Narbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/itemlist">Items List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Narbar;
