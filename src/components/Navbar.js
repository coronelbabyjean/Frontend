// Navbar.js
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
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
    <>
      {/* Provide color context for icons within the Navbar */}
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* Main Navbar container */}
        <div className="navbar">
          {/* Hamburger menu icon */}
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        
        {/* Sidebar navigation menu */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* List of items in the sidebar */}
          <ul className="nav-menu-items" onClick={showSidebar}>
            {/* Close button in the sidebar */}
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
            {/* Map through SidebarData to generate sidebar items */}
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {/* Icon for each sidebar item */}
                  {item.icon}
                  {/* Text label for each sidebar item */}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
            
            {/* Logout button in the sidebar */}
            <li className="nav-text logout">
              <Link to="#" onClick={handleLogoutClick}>
                <FaIcons.FaSignOutAlt />
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
