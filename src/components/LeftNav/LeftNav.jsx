import React from "react";
import "./LeftNav.css";
import { NavLink } from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useGlobalHook } from "../../context/Contexts";
const LeftNav = () => {
  const { leftNav, handleNavIconClick } = useGlobalHook();
  const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "200",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "#f2f2f3" : "#545455",
  });

  return (
    <div className="left-nav" style={{ border: "2px solid red" }}>
      <div className="icon" onClick={handleNavIconClick}>
        {leftNav ? <FiChevronsLeft /> : <FiChevronsRight />}
      </div>
      <ul className="unorder-list">
        <NavLink className="navLink" style={getActiveStyle} to="/">
          <li>Dashboard</li>
        </NavLink>
        <NavLink className="navLink" style={getActiveStyle} to="/departments">
          <li>Departments </li>
        </NavLink>
        <NavLink className="navLink" style={getActiveStyle} to="/product">
          <li>Products</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default LeftNav;
