// Navbar.js
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar({ handleLogout }) {
  // State to manage the sidebar visibility
  const [sidebar, setSidebar] = useState(false);
  
  // Access the history object from React Router
  const history = useHistory();

  // Function to toggle the sidebar visibility
  const showSidebar = () => setSidebar(!sidebar);

  // Function to handle logout button click
  const handleLogoutClick = () => {
    // Perform actions to clear authorization
    handleLogout(); // Update authentication status to false
    history.push("/login"); // Redirect to the login page
  };

  return (
    <div className="navbar">
      <div className="nav-items">
        <Link to="/vehicle-list" className="nav-item">
          VEHICLES
        </Link>
        <Link to="/dealer-profile" className="nav-item">
          DEALER PROFILE
        </Link>
        <Link to="/manufacturer" className="nav-item">
          MANUFACTURER
        </Link>
        <Link to="/sales" className="nav-item">
          SALES
        </Link>
      </div>

      <div className="nav-text logout">
        <Link to="#" onClick={handleLogoutClick}>
          SIGN OUT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;